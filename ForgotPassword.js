/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';

export default class ForgotPassword extends Component {

  state = {
    email : ''
  }

  onClickListener() {
    if (this.state.email == "") {
      alert('Please enter email id.')
    } else {
      this.props.navigation.navigate('MobileNumberList')
    }
  }

  render() {
    return (
      <ScrollView>

        <View style={style.container}>

          <TextInput mode='outlined' theme={{colors: {primary: '#FF9A00'}}} label='Username' style={style.textFieldContainer} returnKeyType='done' keyboardType='email-address' autoCapitalize='none' onChangeText={(text) => this.setState({email: text})} value={this.state.email}></TextInput>

          <Text style={style.staticTextStyle}>Enter your username here, you will receive otp on your registered mobile number.</Text>

          <TouchableOpacity style={style.getOtpButton} onPress={() => this.onClickListener()}>
            <Text style={style.getOtpText}>GET OTP</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: 'column',
  },
  textFieldContainer: {
    top: 30,
    width: '80%',
    fontSize: 16,
  },
  staticTextStyle: {
    color: 'gray',
    fontSize: 16,
    top: 40,
    marginHorizontal: '0%',
    width: '80%',
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

export function validateIsEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
