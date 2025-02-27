import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";

class App extends Component {
  render() {
    return(
      <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'white'}}>
        <View style={{height:50, backgroundColor: 'gray'}}></View>
        <View style={{height:50, width:50, backgroundColor: 'green'}}>
          <Text>Olá Mundo</Text>
        </View>
        <View style={{height:50, width:50, backgroundColor: 'yellow'}}></View>
        <View style={{height:50, width:50, backgroundColor: 'blue'}}></View>
        <View style={{height:50, backgroundColor: 'gray'}}></View>
      </View>
    );
  }
}

export default App
