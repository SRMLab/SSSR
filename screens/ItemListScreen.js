import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ItemList extends Component {
  static navigationOptions = {
    title: 'Item List',
  };

  componentDidMount() {
    this.props.fetchItems();
  }

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

export default connect(null, actions)(ItemList);
