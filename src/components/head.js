import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../style/styles.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Head extends Component {
  constructor(props) {
    super(props);
  }
  changeNav() {
    this.props.navigation.goBack();
  }
  get() {
    return this.props.needBack ?
    <Icon style={styles.icon} name="arrow-left" onPress={this.changeNav.bind(this)} /> : <Text style={styles.icon}/>;
  }
  render() {
    return (
      <View style={[styles.bar, styles.head]}>
        {this.get()}
        <Text style={[styles.size24, styles.flex1, styles.bold, styles.white]}>{this.props.title || '呷瞎咪'}</Text>
        <Text style={styles.icon}/>
      </View>
    );
  }
}
