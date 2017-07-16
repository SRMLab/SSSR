import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { Button } from 'react-native-elements';

class ItemList extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Item List',
    headerRight: (
      <Button 
        title='New'
        onPress={() => navigation.navigate('itemForm')}
        backgroundColor="rgba(0,0,0,0)"
        color="rgba(0, 122, 255, 1)"
      />
    ),
  });

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
