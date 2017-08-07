import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  AsyncStorage,
  ScrollView,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import Footer from '../components/footer.js';
import Head from '../components/head.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/styles.js';
import LabelDialog from '../components/labelDialog.js';
import defaultLabels from '../data/defaultLabels.js';

export default class Labels extends Component {
    constructor(props){
       super(props);
       this.state = {
         allLabels: []
       };
     }
    componentDidMount() {
       AsyncStorage.getItem("allLabels").then((value) => {
          this.setState({
            "allLabels": JSON.parse(value) || []
          });
       }).done();
    }
    getAllLabels() {
      const datas = (this.state && this.state.allLabels) || [];
      return defaultLabels.concat(datas);
    }
    getId() {
      const data = this.getAllLabels().find((label, index, labels) => {
        const next = labels[index + 1];
        return label.id + 1 !== (next && next.id);
      });
      return ((data && data.id) || 0) + 1;
    }
    getData() {
      const { allLabels, isDelete, isModify } = this.state;
      const datas = allLabels || [];
      return this.getAllLabels().map((data, index) => (
        <View key={data.text} style={[styles.listItem, index && styles.borderTop]}>
          <View style={[styles.flexRow, styles.flexC1]}>
            <Image style={styles.label} source={data.icon || require('../img/other.png')}/>
            <Text
              style={[styles.size20, styles.bold,styles.mLeft15]}>
                {data.text}</Text>
          </View>
          {!data.icon && isDelete &&
            <Icon name='trash-o' size={25} color='#ca5353'
            onPress={this.deletaData.bind(this, data)}/>}
          {!data.icon && isModify &&
            <Icon name='pencil-square-o' size={25} color='#255496'
              onPress={this.modifyData.bind(this, data)}/>}
        </View>
      ));
    }
    callDetele() {
      this.setState({
        ...this.state,
        isModify: false,
        isDelete: !this.state.isDelete
      });
    }
    callModify() {
      this.setState({
        ...this.state,
        isModify: !this.state.isModify,
        isDelete: false
      });
    }
    callCreate() {
      this.setState({...this.state,
        visible:{ title: '新增'},
        isDelete: false,
        isModify: false
      });
    }
    modifyData({text, id}) {
      this.setState({...this.state, visible: { title: '修改', text, id}});
    }
    deletaData({id}) {
      const data = this.state.allLabels.filter(item => item.id !== id);
      this.setState({...this.state, allLabels: data });
      AsyncStorage.setItem("allLabels", JSON.stringify(data));
    }
    saveData({id, text}) {
      if (!text) return null;
      const { allLabels, visible} = this.state;
      const data = id ?
        allLabels.map(item => item.id === id ? {...item, text} : item)
          : [...allLabels, { text, id: this.getId() }];
      this.setState({...this.state, allLabels: data, visible: false });
      AsyncStorage.setItem("allLabels", JSON.stringify(data));
    }

    render() {
      const footerProps = {
        create: this.callCreate.bind(this),
        modify: this.callModify.bind(this),
        delete: this.callDetele.bind(this),
      };
      return (
        <View style={styles.container}>
          <Head
            navigation={this.props.navigation}
            needBack={true}
            title="標籤"
          />
          <ScrollView style={{ width: '100%' }}>
            {this.getData()}
          </ScrollView>
          <Footer navigation={this.props.navigation} {...footerProps}/>
          {
            this.state.visible && <LabelDialog
              data={this.state.visible}
              hide={() => this.setState({...this.state, visible: false})}
              save={this.saveData.bind(this)}
            />
          }
        </View>
      );
    }
}
