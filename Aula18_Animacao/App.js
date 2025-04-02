import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default function App() {
  const larAnimada = useRef(new Animated.Value(150)).current;
  const altAnimada = useRef(new Animated.Value(50)).current;
  //const opacAnimada = useRef(new Animated.Value(1)).current;

  useEffect(()=> {
    Animated.loop(
      Animated.sequence([
        Animated.timing(larAnimada, {
          toValue: 300,
          duration: 1000,
          useNativeDriver: false
        }),
        Animated.timing(larAnimada, {
          toValue: 150,
          duration: 1000,
          useNativeDriver: false
        }),
        /*Animated.timing(opacAnimada, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false
        }),*/
      ])
    ).start()
  }, []);
  return(
    <View style={styles.container}>
      <Animated.View style={[styles.barra, {width: larAnimada, height: altAnimada}]}>
        <Text style={styles.textoBarra}>Carregando</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  barra: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#0000ff"
  },
  textoBarra: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: 'bold'
  }
});