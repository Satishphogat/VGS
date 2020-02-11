/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Dimensions, FlatList } from 'react-native';

export default class ForgotPassword extends Component {

  render() {
    return (
        <View style={style.container}>
        <Text style={{marginHorizontal: 20, marginTop: 30}}>SELECT ONE NUMBER TO RECEIVE OTP ON {"\n"}
        THAT NUMBER</Text>

        <FlatList
        data = {[
          {key: 'abc'},
          {key: 'xyz'}
          ]}
          renderItem = {({item}) => <Text style={style.item}>{item.key}</Text>}
        />
        </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: 'column',
    backgroundColor: '#F2F2F2',
    fontSize: 20,
    width: '80%'
  },
  item: {
   fontSize: 20,
   fontWeight: 'bold',
   height: 44,
 },
})
