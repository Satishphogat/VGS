/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
//import {WebView} from 'react-native-webview';


export default class Login extends Component {

  render() {
    return (
      <ScrollView>
      <View style={style.container}>

      {/* <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
      /> */}
        

      </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column'
  },
})

export const textInputFontSize = () => {
  return 24
}
