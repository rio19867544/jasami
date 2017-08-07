/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  AsyncStorage,
  BackHandler,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Items from './src/pages/items.js';
import Home from './src/pages/home.js';
import Labels from './src/pages/labels.js';

const jasami = StackNavigator({
  Home: { screen: Home },
  Items: { screen: Items },
  Labels: { screen: Labels },
}, {
  headerMode: 'none',
  initialRouteName: 'Home',
});

AppRegistry.registerComponent('jasami', () => jasami);
