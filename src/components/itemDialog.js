import React, { Component } from 'react';
import {
  Modal,
  View,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from '../style/styles.js';
import ChooseLabels from '../components/chooseLabels.js';

export default class ItemDialog extends Component {
  constructor(props) {
    super(props);
    const { labels, data } = this.props;
    this.state = {
      text: (data && data.text) || '',
      labels: labels.map((label) => {
        label.selected = data.labels && data.labels.indexOf(label.id) > -1;
        return label;
      }),
    }
  }
  close() {
    this.props.hide();
  }
  save() {
    this.props.save({
      ...this.props.data,
      text: this.state.text,
      labels: this.state.labels
        .filter(label => label.selected)
        .map(item => item.id)
        .sort((a,b) => a - b)
    });
  }
  select({id, selected}) {
    this.setState({
      ...this.state,
      labels: this.state.labels
        .map(item => item.id === id ?
          {...item, selected: !item.selected} : item),
    })
  }
  render() {
    return (
      <Modal
        animationType={"fade"}
        transparent={true}
        onRequestClose={this.close.bind(this)}
        >
          <View style={styles.mask}>
            <View style={[styles.dialog, styles.bgWhite]}>
              <Text style={styles.dialogTitle}>{this.props.data.title}</Text>
              <View style={styles.flex1}>
                <View style={styles.dialogItem}>
                  <Text style={styles.itemTitle}>店家 ：</Text>
                  <TextInput style={styles.input} placeholder='輸入店家名稱' underlineColorAndroid='transparent'
                  value={this.state.text}
                  onChangeText={(text) => this.setState({text})}/>
                </View>
                <View style={[styles.flex1, {margin: 10}]}>
                  <Text style={styles.itemTitle}>標籤選擇</Text>
                  <ChooseLabels
                    onSelect={this.select.bind(this)}
                    labels={this.state.labels}/>
                </View>
              </View>
              <View style={[styles.bar, styles.dialogFooter]}>
                <Text
                  style={[styles.flex1, styles.size20, styles.bold, styles.padding10]}
                  onPress={this.close.bind(this)}>取消</Text>
                <Text style={[styles.flex1, styles.size20, styles.bold, styles.borderLeft, styles.padding10]}
                onPress={this.save.bind(this)}>儲存</Text>
              </View>
            </View>
          </View>
      </Modal>
    );
  }
}
