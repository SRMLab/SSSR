import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ItemList extends Component {
  static navigationOptions = {
    title: 'Item List',
  };

  render() {
    return (
      <View>
        <Text>ItemList Screen!!!</Text>
        <Text>ItemList Screen!!!</Text>
        <Text>ItemList Screen!!!</Text>
        <Text>ItemList Screen!!!</Text>
        <Text>ItemList Screen!!!</Text>
      </View>
    )
  }
}

export default ItemList;
