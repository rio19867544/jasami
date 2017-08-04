import React, { Component } from 'react';
import {
  Modal,
  View,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from '../style/styles.js';

export default class ItemDialog extends Component {
  constructor(props) {
    super(props);
  }
  close() {
    this.props.hide();
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
              <Text style={styles.dialogTitle}>{this.props.title}</Text>
              <ScrollView style={styles.flex1, {margin: 20}}>
                <View style={styles.dialogItem}>
                  <Text style={styles.itemTitle}>店家 ：</Text>
                  <TextInput style={styles.input} placeholder='輸入店家名稱' underlineColorAndroid='transparent'/>
                </View>
                <View style={styles.dialogItem}>
                  <Text style={styles.itemTitle}>標籤 ：</Text>
                  <View style={styles.textArea}>
                    
                  </View>
                </View>
              </ScrollView>
              <View style={[styles.bar, styles.dialogFooter]}>
                <Text
                  style={[styles.flex1, styles.size20, styles.bold, styles.padding10]}
                  onPress={this.close.bind(this)}>取消</Text>
                <Text style={[styles.flex1, styles.size20, styles.bold, styles.borderLeft, styles.padding10]}>儲存</Text>
              </View>
            </View>
          </View>
      </Modal>
    );
  }
}
