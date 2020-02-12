/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Dimensions, FlatList } from 'react-native';
import { TextInput } from 'react-native-paper';

export default class ForgotPassword extends Component {

  render() {
    return (
        <View style={style.container}>
          <View style={style.white}>
            <View style={style.blue}></View>
            <View style={style.yellow}></View>
          </View>
          <View style={style.gray}>
            <TextInput style={style.textInput} placeholder='Username'></TextInput>
            <TextInput style={style.textInput} placeholder='Password'></TextInput>

          </View>
        </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: 'column',
   backgroundColor: 'green'
  },
  white: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  gray: {
    flex: 1,
    backgroundColor: 'gray',
    flexDirection: 'column',
  },
  blue: {
    backgroundColor: 'blue',
    flex: 1,
    margin: 10
  },
  yellow: {
    backgroundColor: 'yellow',
    flex: 1,
    margin: 10
  },
  textInput: {
    borderColor: 'green',
    borderWidth: 2,
    height: 50,
    margin: 10
  }
})
