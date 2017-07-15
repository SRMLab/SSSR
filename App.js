import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';

import WelcomeScreen from './screens/WelcomeScreen';
import ShoppingListScreen from './screens/ShoppingListScreen';
import ItemListScreen from './screens/ItemListScreen';
import ItemScreen from './screens/ItemScreen';
import ItemFormScreen from './screens/ItemFormScreen';
import ExpScreen from './screens/ExpScreen';
import SettingScreen from './screens/SettingScreen';

export default class App extends React.Component {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
