import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

// Aula 24 - Album e Camera
export default function App() {
  const[photo, setPhoto] = useState(null);

  // Função de abrir o album
  async function openAlbum() {
    const permisionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(!permisionResult.granted) {
      alert('Permisão para acessar a galeria foi negado!');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: false
    });
    if(!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  }

  // Função de abrir a camera
  async function openCamera() {
    const permisionResult = await ImagePicker.requestCameraPermissionsAsync();
    const libPermisson = await MediaLibrary.requestPermissionsAsync();
    if(!permisionResult.granted || !libPermisson.granted) {
      alert('Permissão para acessar a câmera foi negado!');
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: false
    });
    if(!result.canceled) {
      setPhoto(result.assets[0].uri);
      savePhoto(result.assets[0].uri);
    }
  }

  // Função de salvar imagem
  async function savePhoto(uri) {
    try {
      const asset = await MediaLibrary.createAssetAsync(uri);
      await MediaLibrary.createAlbumAsync('Minhas fotos', asset, false);
      alert('Sucesso!', 'Fotos salvas na galeria!');
    }catch (error) {
      console.log(error);
      alert('Erro', 'Não foi possivel salvar essa imagem');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botao} onPress={openAlbum}>
          <Text style={{ color: "#FFF", fontSize: 20, fontWeight: 'bold' }}>Abrir album</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={openCamera}>
          <Text style={{ color: "#FFF", fontSize: 20, fontWeight: 'bold' }}>Abrir camêra</Text>
        </TouchableOpacity>
      </View>
      {photo !== null && (
        <Image source={{ uri: photo }} style={styles.imagem}/>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botoes: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10
  },
  botao: {
    width: 170,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  imagem: {
    width: 350,
    height: 350,
    margin: 10,
  }
});
