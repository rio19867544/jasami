import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  AsyncStorage,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Footer from '../components/footer.js';
import Head from '../components/head.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/styles.js';
import ItemDialog from '../components/itemDialog.js';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';

export default class Items extends Component {
    constructor(props){
       super(props);
       this.state = { allItem: []};
     }
    componentDidMount() {
       AsyncStorage.getItem("allItem").then((value) => {
          this.setState({"allItem": JSON.parse(value) || []});
       }).done();
    }

    getData() {
      const datas = (this.state && this.state.allItem) || [];
      return datas.map((data, index) => (
        <View  key={'list' + index} style={[styles.listItem, index && styles.borderTop]}>
          <Text style={[styles.size16, styles.bold]}>{data}</Text>
          <Icon name='trash-o' size={25} color='red'/>
        </View>
      ));
    }
    callDetele() {
      console.log('delete');
    }
    callModify() {
      console.log('modify');
    }
    callCreate() {
      // console.log(this.popupDialog.show);
      // console.log(this.itemDialog.show);
      this.setState({...this.state, visible: 'create'});
      // this.popupDialog.show();
      console.log('create');
    }
    // deletaData(index) {
    //   if (typeof index !== 'number' && index < 0) return;
    //   const data = this.state.allItem.filter((item, $index) => $index !== index);
    //   this.setState({...this.state, allItem: data });
    //   AsyncStorage.setItem("allItem", JSON.stringify(data));
    // }
    // saveData() {
    //   if (!this.state.text) return null;
    //   const data = [...this.state.allItem, this.state.text];
    //   this.setState({...this.state, allItem: data, text: '' });
    //   AsyncStorage.setItem("allItem", JSON.stringify(data));
    // }
    // clearData() {
    //    AsyncStorage.setItem("allItem", '');
    //    this.setState({allItem: [], text: '' });
    // }


    render() {
      const footerProps = {
        create: this.callCreate.bind(this),
        modify: this.callModify.bind(this),
        delete: this.callDetele.bind(this),
      };
      return (
        <View style={styles.container}>
          <Head navigation={this.props.navigation}/>
          <ScrollView style={{ width: '100%' }}>
            {this.getData()}
          </ScrollView>
          <Footer navigation={this.props.navigation} {...footerProps}/>
          {
            this.state.visible && <ItemDialog
              title={this.state.visible}
              hide={() => this.setState({...this.state, visible: false})}
            />
          }
        </View>
      );
    }
}
