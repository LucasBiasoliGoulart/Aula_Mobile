import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Contato() {
  return(
    <View style={styles.container}>
      <Text>Contato</Text>
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