import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../style/styles.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter';

export default class Head extends Component {
  constructor(props) {
    super(props);
  }
  changeNav() {
    RCTDeviceEventEmitter.emit('update-state');
    this.props.navigation.goBack();
  }
  getBack() {
    return this.props.needBack ?
    <Icon style={styles.icon} name="arrow-left" onPress={this.changeNav.bind(this)} /> : <Text style={styles.icon}/>;
  }
  getFilter() {
    return this.props.needFilter ?
    <Icon style={styles.icon} name="filter" onPress={this.props.needFilter} /> : <Text style={styles.icon}/>;
  }
  render() {
    return (
      <View style={[styles.bar, styles.head]}>
        {this.getBack()}
        <Text style={[styles.size24, styles.flex1, styles.bold, styles.white]}>{this.props.title || '呷瞎咪'}</Text>
        <Text style={styles.icon}/>
        {this.getFilter()}
      </View>
    );
  }
}
