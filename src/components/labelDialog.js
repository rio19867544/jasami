import React, { Component } from 'react';
import {
  Modal,
  View,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from '../style/styles.js';

export default class LabelDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: (this.props.data && this.props.data.text) || '',
    };
  }
  close() {
    this.props.hide();
  }
  save() {
    this.props.save({
      ...this.props.data,
      ...this.state,
    });
  }
  render() {
    return (
      <Modal
        animationType={"fade"}
        transparent={true}
        onRequestClose={this.close.bind(this)}
        >
          <View style={styles.mask}>
            <View style={[styles.dialogSmall, styles.bgWhite]}>
              <Text style={styles.dialogTitle}>{this.props.data.title}</Text>
              <View style={[styles.dialogItem, { margin: 20, flex: 1}]}>
                <Text style={styles.itemTitle}>標籤 ：</Text>
                <TextInput
                  onChangeText={(text) => this.setState({text})}
                  style={styles.inputNoBorder}
                  value={this.state.text}
                  placeholder='輸入標籤名稱' />
              </View>
              <View style={[styles.bar, styles.dialogFooter]}>
                <Text
                  style={[styles.flex1, styles.size20, styles.bold, styles.padding10]}
                  onPress={this.close.bind(this)}>取消</Text>
                <Text
                  style={[styles.flex1, styles.size20, styles.bold, styles.borderLeftWidthBlue, styles.padding10]}
                  onPress={this.save.bind(this)}>儲存</Text>
              </View>
            </View>
          </View>
      </Modal>
    );
  }
}
