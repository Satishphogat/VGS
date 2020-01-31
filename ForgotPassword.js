/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';



export default class ForgotPassword extends Component {
  
  render() {
    return (
      <View style={style.container}>
        <View style={style.textFieldContainer}></View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: 'column',
    backgroundColor: 'green'
  },
  textFieldContainer: {
    top: 10,
    borderRadius: 2,
    backgroundColor: 'blue',
    flexDirection: 'row',
    paddingHorizontal: 30,
    alignItems: 'flex-start',
    flex: 8
  }
})
