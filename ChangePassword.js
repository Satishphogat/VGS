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

  onClickListener() {
    if (this.state.newPassword == "") {
      alert('Please enter new password')
    } else if (this.state.confirmPassword == "") {
      alert('Please enter confirm password')
    } else if (this.state.newPassword != this.state.confirmPassword) {
      alert('New password and confirm password must be same')
    } else {
       this.props.navigation.navigate('Login')
    }
  }

  render() {
    return (
      <View style = {style.container}>
      <TextField style={style.textInput} label="New Password" title="Enter new password here" tintColor='gray' textColor='black' baseColor= 'gray' onChangeText = {(text) => this.setState({newPassword: text})} ></TextField>
      <TextField style={style.textInput} label="Confirm Password" title="Enter password here to confirm your new password" tintColor='gray' textColor='black' baseColor= 'gray' onChangeText={(text) => this.setState({confirmPassword: text})}></TextField>
      <TouchableOpacity style={style.getOtpButton} onPress={() => this.onClickListener()}>
            <Text style={style.getOtpText}>Change Password</Text>
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
    padding: 20,
  },
  textInput: {
    height: 35,
    fontSize: 20,
    fontWeight: '400'
  },
  getOtpText: {
    textAlign: 'center', fontSize: 22, color: 'white'
  },
  getOtpButton: {
    backgroundColor: "#344756",
    top: 60,
    borderRadius: 5,
    justifyContent: 'center',
    width: '80%',
    height: 50,
    marginHorizontal: 30
  },
})
