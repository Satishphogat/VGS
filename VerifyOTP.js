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
    otp : ''
  }

  onClickListener(text) {
    switch (text) {
      case 'verifyOtp':
      this.validateOtp()
      break;
      case 'resendOtp':
         alert('OTP has been sent to given number successfully')
      break;
    }

  }

  validateOtp() {
    if (this.state.otp == "") {
      alert('Please enter otp.')
    } else {
      this.props.navigation.navigate('MobileNumberList')
    }
  }

  render() {
    return (
      <ScrollView>

        <View style={style.container}>

        <Text style={style.enterOtpStaticText}>Enter OTP sent to</Text>
        <Text style={style.mobileNumber}>9889779878</Text>
        <TextInput style={style.textInput} onChangeText = {(text) => this.setState({otp: text})} keyboardType='number-pad' maxLength={6} />

          <TouchableOpacity style={style.orangeButton} onPress={() => this.onClickListener('verifyOtp')}>
            <Text style={style.loginText}>Verify OTP</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {style.resendOtpButton} onPress={() => this.onClickListener('resendOtp')}>
            <Text style={style.resendOtpText}>Didn't received otp,{"\n"} click here to resend otp</Text>
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
    margin: 25
  },
  enterOtpStaticText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#344756'
  },
  mobileNumber: {
    fontSize: 24,
    color: '#344756',
    top: 10
  },
  textInput: {
    width: '60%',
    top: 30,
    borderWidth: 0.5,
    height: 50,
    borderRadius: 5
  },
  loginText: {
    textAlign: 'center', fontSize: 24, color: 'white'
  },
  orangeButton: {
    backgroundColor: "#FF9A00",
    top: 100,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    width: '60%'
  },
  resendOtpButton: {
    top: 150,
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
  },
  resendOtpText: {
    color: 'blue',
    fontSize: 16,
  }
})
