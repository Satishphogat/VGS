/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextField } from 'react-native-material-textfield';

export default class ChangePassword extends Component {

  state  = {
    newPassword: '',
    confirmPassword: ''
  }
 
  render() {
    return (
      <View style = {style.container}>
      <TextField style={style.textInput} label="New Password" title="Enter new password here" tintColor='gray'></TextField>
      <TextField style={style.textInput} label="Confirm Password" title="Enter password here to confirm your new password" tintColor='gray'></TextField>
      <TouchableOpacity style={style.getOtpButton} onPress={() => this.onClickListener()}>
            <Text style={style.getOtpText}>GET OTP</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F2F2F2',
    padding: 20
  },
  textInput: {
    height: 50
  },
  getOtpText: {
    textAlign: 'center', fontSize: 22, color: 'white'
  },
  getOtpButton: {
    backgroundColor: "#344756",
    top: 70,
    borderRadius: 5,
    justifyContent: 'center',
    width: '80%',
    height: 50
  },
})
