/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native';



export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isLoginValid: false,
      isPasswordSecure: false
    };
  }

  onClickListener(type) {
    switch (type) {
      case 'login':
        checkLoginValidation()
      case 'forgotPassword':
          break
      case 'showPassword':
            this.setState({isPasswordSecure: !this.state.isPasswordSecure})
    }

    checkLoginValidation = () => {
      if (this.state.username == "") {
        alert('Please enter username')
      } else if (this.state.password == "") {
        alert('Please enter password')
      } else {
        this.isLoginValid = true
      }
    }


  }

  render() {
    return (

      <View style={style.container}>

        <View style={style.bottomContainer}>

          <View style={style.textFieldContainer}>
            <TextInput
              placeholder="Enter Userame"
              onChangeText={(text) => {
                this.setState({ username: text })
              }}
              value={this.state.username}
              style={style.textInput}>
            </TextInput>
          </View>

          <View style={[style.textFieldContainer, { top: 100 }]}>
            <TextInput
              placeholder="Enter Password"
              onChangeText={(text) => {
                this.setState({ password: text })
              }}
              secureTextEntry = {this.state.isPasswordSecure}
              value={this.state.password}
              style={style.textInput}>
            </TextInput>
          </View>

          <View style={style.passwordContainer}>
            <TouchableOpacity style={style.forgotPassword} onPress={() => this.onClickListener('showPassword')}>
              <Text style={style.forgotPassword}>Show Password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.forgotPassword} onPress={() => this.onClickListener('forgotPassword')} >
              <Text style={style.forgotPassword}>FORGOT PASSWORD?</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={style.orangeButton} onPress={() => this.onClickListener('login')}>
              <Text style={style.loginText}>Login</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    );
  }
}

const style = StyleSheet.create({
  loginText: {
    textAlign: 'center', fontSize: 24, color: 'white'
  },
  orangeButton: {
    backgroundColor: "#FF9A00",
    top: 200,
    height: 50,
    marginHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center'
  },
  forgotPassword: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '500'
  },
  passwordContainer: {
    flexDirection: 'row',
    height: 60,
    marginHorizontal: 30,
    top: 180,
    justifyContent: "space-between"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'gray'
  },
  bottomContainer: {
    backgroundColor: '#f9f9f9',
    position: 'absolute',
    top: (Dimensions.get('window').height / 2) + 20,
    left: 0,
    right: 0,
    bottom: 0
  },
  textFieldContainer: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    height: 70,
    marginHorizontal: 25,
    borderRadius: 5
  },
  textInput: {
    height: 70,
    fontSize: 24,
    color: 'black',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 5
  }
})