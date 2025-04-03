import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default function App() {
  const larAnimada = useRef(new Animated.Value(0)).current;
  const altAnimada = useRef(new Animated.Value(50)).current;
  //const opacAnimada = useRef(new Animated.Value(1)).current;

  useEffect(()=> {
      Animated.sequence([
        Animated.timing(larAnimada, {
          toValue: 100,
          duration: 1000,
          useNativeDriver: false
        }),
        Animated.timing(altAnimada, {
          toValue: 100,
          duration: 1000,
          useNativeDriver: false
        }),
        /*Animated.timing(opacAnimada, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false
        }),*/
      ]).start(()=> {
        alert('Hello World')
      });
  }, []);

  let porcentagemLargura = larAnimada.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%']
  })

  return(
    <View style={styles.container}>
      <Animated.View style={[styles.barra, {width: porcentagemLargura, height: altAnimada}]}>
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