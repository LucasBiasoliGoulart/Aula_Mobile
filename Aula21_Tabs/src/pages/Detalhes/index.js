import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Detalhes() {
  return(
    <View style={styles.container}>
      <Text>Detalhes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});