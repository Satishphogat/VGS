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

  onClickListener() {
    console.log('success')
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          marginHorizontal: 20,
          backgroundColor: "#E9EAEC",
        }}
      />
    );
  }

  render() {
    return (
      <View style={style.container}>
        <Text style={style.staticText}>SELECT ONE NUMBER TO RECEIVE OTP ON
        THAT NUMBER</Text>

        <FlatList
          style={style.flatList}
          data={[
            { key: '9887545422' },
            { key: '9887545425' }
          ]}

          ItemSeparatorComponent = { this.FlatListItemSeparator }

          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => this.onClickListener()} >
              <Text style={style.item}>{item.key}</Text>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F2F2F2',
  },
  staticText: {
    height: 90,
    color: 'gray',
    fontSize: 16,
    paddingTop: 30,
    paddingLeft: 20
  },
  flatList: {
    backgroundColor: 'white',
    height: 100,
    flexGrow: 0
  },
  item: {
    fontSize: 18,
    fontWeight: 'bold',
    height: 50,
    paddingLeft: 20,
    paddingTop: 10
  },
})
