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
        <Text style={{marginHorizontal: 10, marginTop: 30, paddingHorizontal: 0, width: Dimensions.get('window').width - 20
}}>SELECT ONE NUMBER TO RECEIVE OTP ON {"\n"}
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
    flex: 1,
    alignItems: "center",
    flexDirection: 'column',
    backgroundColor: '#F2F2F2',
    fontSize: 20,
  },
  item: {
   padding: 10,
   fontSize: 20,
   fontWeight: 'bold',
   height: 44,
   paddingHorizontal: 10,
   width: Dimensions.get('window').width - 10
 },
})
