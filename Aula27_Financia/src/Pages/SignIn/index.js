import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const navigation = useNavigation();
  return (
    <View style={styles.background}>
      <KeyboardAvoidingView style={styles.container}>
        <Image source={require("../../Assets/Logo.png")} style={styles.logo} />
        <View style={{ margin: 5 }}>
          <Text>Email</Text>
          <TextInput style={styles.input} placeholder="Digite seu email" />
        </View>
        <View style={{ margin: 5 }}>
          <Text>Senha</Text>
          <TextInput style={styles.input} placeholder="Digite sua senha" />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#f0f4ff",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    margin: 20,
  },
  input: {
    width: 350,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#FFF"
  },
});
