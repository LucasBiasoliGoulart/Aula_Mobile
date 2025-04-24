import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { launchImageLibraryAsync, launchCameraAsync } from 'expo-image-picker';

// Aula 24 - Album e Camera
export default function App() {
  const[photo, setPhoto] = useState(null);

  // Função de abrir o album
  function openAlbum() {
    const options = {
      mediaType: 'Photo',
      quality: 1,
      selectionLimit: 1,
    }
    launchImageLibraryAsync(options, (response) => {
      if(response.didCancel) {
        console.log("IMAGE PICKER CANCELADO");
        return;
      }else if(response.error) {
        console.log("GEROU ERRO", response.errorMessage)
        return;
      }
      console.log(response.assets);
      setPhoto(response.assets[0].uri);
    })
  }

  // Função de abrir a camera
  async function openCamera() {
    const options = {
      mediaType: 'Photo',
      quality: 1,
      selectionLimit: 1,
    }
    const response = await launchCameraAsync(options);
    setPhoto(response.assets[0].uri);
  }

  return (
    <View style={styles.container}>
      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botao} onPress={openAlbum}>
          <Text style={{ color: "#FFF" }}>Abrir album</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={openCamera}>
          <Text style={{ color: "#FFF" }}>Abrir camera</Text>
        </TouchableOpacity>
      </View>

      {photo !== null && (
        <Image source={{ uri: photo }}/>
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
    width: 140,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#292929'
  }
});
