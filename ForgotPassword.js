/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native';



export default class ForgotPassword extends Component {
  
  render() {
    return (
      <ScrollView>
      <View style={style.container}>

        <Image source={require('./Assets/home.jpeg')} style={{ flex: 2 }}></Image>

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
    //backgroundColor: 'gray',
    flexDirection: 'column'
  }
})
