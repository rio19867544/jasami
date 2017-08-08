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

export default class FilterDialog extends Component {
  constructor(props) {
    super(props);
    const { labels, data } = this.props;
    this.state = {
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
                <ChooseLabels
                  style={{ borderWidth: 1, borderColor: '#b7b7b7'}}
                  onSelect={this.select.bind(this)}
                  labels={this.state.labels}/>
              </View>
              <View style={[styles.bar, styles.dialogFooter]}>
                <Text
                  style={[styles.flex1, styles.size20, styles.bold, styles.padding10]}
                  onPress={this.close.bind(this)}>取消</Text>
                <Text style={[styles.flex1, styles.size20, styles.bold, styles.borderLeftWidthBlue, styles.padding10]}
                onPress={this.save.bind(this)}>儲存</Text>
              </View>
            </View>
          </View>
      </Modal>
    );
  }
}
