import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import styles from '../style/styles.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ChooseLabels extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView style={[styles.chooseArea]} {...this.props.style}>
        {
          this.props.labels.map((label, $i) => {
            const color = label.selected ? '#1d9d74' : '#ddd';
            return (
              <TouchableNativeFeedback  key={label.text + $i}
                onPress={() => this.props.onSelect(label)}>
                <View style={[styles.chooseItem, $i && styles.borderTop]}>
                  <View style={[styles.flexRow, styles.flexC1]}>
                      <Image style={styles.label} source={label.icon || require('../img/other.png')}/>
                    <Text
                      style={[styles.size20, styles.bold,styles.mLeft15]}>
                        {label.text}</Text>
                  </View>
                  <Icon name='check-circle' size={25} color={color}/>
                </View>
              </TouchableNativeFeedback>
            );
          })
        }
      </ScrollView>
    );
  }
}
