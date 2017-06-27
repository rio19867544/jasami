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
  Navigator,
} from 'react-native';
import Add from './components/add.js';
import Info from './components/info.js';

export default class jasami extends Component {
    constructor(props){
       super(props);
     }

     renderScene(route,nav) {
       if (route.name === 'add') return <Add navigator={nav}/>;
        return <Info navigator={nav}/>;
     }

    render() {
      return (
        <View style={styles.container}>
          <Navigator style={styles.navigator}
             initialRoute={{ name: 'info'}}
             renderScene={this.renderScene.bind(this)}
             configureScene = {({ title }) => {
              return {
                ...Navigator.SceneConfigs.FloatFromBottom,
                gestures: null,
                defaultTransitionVelocity: null,
                springFriction: null,
                springTension: 1000,
                animationInterpolators: {
                    into: r => r.opacity = 1,
                    out: r => r.opacity = 1,
                },
              };
            }}
         />
       </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
    },
});

AppRegistry.registerComponent('jasami', () => jasami);
