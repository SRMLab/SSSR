import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import * as actions from '../actions';

class ItemFormScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'New Item',
  });

  state = {
    name: '',
    unit: '',
    category: ''
  }

  handleSubmit = () => {
    const { navigate } = this.props.navigation;
    this.props.addItem({ ...this.state }, () => {
      navigate('itemList');
    });
  }

  render() {
    return (
      <View>
        <FormLabel>Name</FormLabel>
        <FormInput
          onChangeText={(name) => this.setState({name})}
          ref='forminput'
          textInputRef='name'
          placeholder='ex. Broccoli'
        />
        <FormLabel>Unit</FormLabel>
        <FormInput
          onChangeText={(unit) => this.setState({unit})}
          ref='forminput'
          textInputRef='unit'
          placeholder='ex. Case 20lb'
        />
        <FormLabel>Category</FormLabel>
        <FormInput
          onChangeText={(category) => this.setState({category})}
          ref='forminput'
          textInputRef='category'
          placeholder='ex. Produce'
        />
        <TouchableOpacity>
          <Button title='Submit' onPress={this.handleSubmit}/>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(null, actions)(ItemFormScreen);
