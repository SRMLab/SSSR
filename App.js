import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { firebaseConfig } from './config';
import store from './store';

import WelcomeScreen from './screens/WelcomeScreen';
import ShoppingListScreen from './screens/ShoppingListScreen';
import ItemListScreen from './screens/ItemListScreen';
import ItemScreen from './screens/ItemScreen';
import ItemFormScreen from './screens/ItemFormScreen';
import ExpScreen from './screens/ExpScreen';
import SettingScreen from './screens/SettingScreen';

import { fetchItems } from './actions';

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
    // console.log("starting...")
    // fetchItems();
    // const ref = firebase.database().ref('items');
    // firebase.database().ref('items')
    //   .on('value', snapshot => {
    //     console.log("fetchItems: ", snapshot.val())
    //     // dispatch({ type: FETCH_ITEMS, payload: snapshot.val() });
    //   });
    // firebase.database().ref('itemsTest')
    //   .set({
    //     name: "testqqq"
    //   });
  }
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      main: {
        screen: TabNavigator({
          shoppingList: {
            screen: StackNavigator({
              shoppingList: { screen: ShoppingListScreen },
              item: { screen: ItemScreen },
            })
          },
          itemList: { 
            screen: StackNavigator({
              itemList: { screen: ItemListScreen },
              itemForm: { screen: ItemFormScreen },
              item: { screen: ItemScreen },
            })
          },
          exp: { screen: ExpScreen },
          setting: { screen: SettingScreen }
        }, {
          tabBarPosition: 'bottom',
          tabBarOptions: {
            labelStyle: { fontSize: 12 }
          }
        })
      }
    }, {
      tabBarOptions: {
        // tabBar: { visible: false }
        style: { display: 'none' }
      },
      lazyLoad: true
    });

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
