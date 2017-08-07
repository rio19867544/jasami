import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from '../style/styles.js';


const data = {
  Home: [{
    text: '呷ㄟ',
    target: 'Items',
  },{
    text: '標籤',
    target: 'Labels',
  }],
  Items: [{
    text: '新增',
    action: 'create',
  },{
    text: '修改',
    action: 'modify',
  },{
    text: '刪除',
    action: 'delete',
  }],
  Labels: [{
    text: '新增',
    action: 'create',
  },{
    text: '修改',
    action: 'modify',
  },{
    text: '刪除',
    action: 'delete',
  }],
};

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: '',
    };
  }
  changeNav({target, action}) {
    if (action) {
      this.setState({now: this.state.now !== action && action});
      return this.props[action]();
    }
    if (!target) return;
    this.props.navigation.navigate(target);
  }
  render() {
    const { routeName } = this.props.navigation.state || {};
    const items = data[routeName] || data.home;
    return (
      <View style={[styles.bar, styles.footer]}>
        {
          items.map((item, index)=>(
            <TouchableOpacity style={styles.flex1} key={item.text}
              onPress={this.changeNav.bind(this, item)}>
              <Text style={[styles.white, styles.size20, index && styles.borderLeft]}>
                { item.action === 'create' || item.action !== this.state.now ? item.text : '關閉'}
              </Text>
            </TouchableOpacity>
          ))
        }
      </View>
    );
  }
}
