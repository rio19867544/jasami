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
    target: '',
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
};

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  changeNav({target, action}) {
    if (action) return this.props[action]();
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
                {item.text}
              </Text>
            </TouchableOpacity>
          ))
        }
      </View>
    );
  }
}
