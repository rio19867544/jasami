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
import ItemDialog from '../components/itemDialog.js';
import ChooseLabels from '../components/chooseLabels.js';
import defaultLabels from '../data/defaultLabels.js';

export default class Items extends Component {
    constructor(props){
       super(props);
       this.state = { allItems: []};
     }
    componentDidMount() {
       AsyncStorage.multiGet(['allItems', 'allLabels']).then((stores) => {
         const data = stores.reduce((pre, [key, value]) => {
           return {
             ...pre,
             [key]: (value && JSON.parse(value)) || [],
           }
         },{});
        this.setState(data);
       }).done();
    }
    getId() {
      const data = this.state.allItems.find((item, index, items) => {
        const next = items[index + 1];
        return item.id + 1 !== (next && next.id);
      });
      return ((data && data.id) || 0) + 1;
    }
    getAllLabels() {
      const datas = (this.state && this.state.allLabels) || [];
      return defaultLabels.concat(datas);
    }
    getLabel(data) {
      if (!data.icon) {
        return (
          <Text key={`${data.text}-${data.id}`} style={styles.textIcon}
            numberOfLines={1}>
            {data.text}
          </Text>);
      }
      return data && <Image style={styles.labelSmall} key={`${data.text}-${data.id}`}
        source={data.icon}/>;
    }
    getData() {
      const { isModify, isDelete } = this.state;
      const datas = (this.state && this.state.allItems) || [];
      return datas.map((data, index) => (
        <View  key={'list' + index} style={[styles.listItem, index && styles.borderTop]}>
          <View style={[styles.flexC1, styles.flexRow]}>
            <Text style={[styles.size20, styles.bold]}>{data.text}</Text>
            <View style={[styles.flexCE1, styles.flexRow]}>
              {data.labels.map((labelId) => {
                  const image = this.getAllLabels().find(label => label.id === labelId);
                  return this.getLabel(image);
                })}
            </View>
          </View>
          <View style={[{minWidth: 40, paddingLeft: 10}]}>
            {!data.icon && isDelete &&
              <Icon name='trash-o' size={25} color='#ca5353' style={{textAlign: 'center'}}
              onPress={this.deletaData.bind(this, data)}/>}
            {!data.icon && isModify &&
              <Icon name='pencil-square-o' size={25} color='#255496'    style={{textAlign: 'center'}}
              onPress={this.modifyData.bind(this, data)}/>}
          </View>
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
        visible: {title: '新增'},
        isDelete: false,
        isModify: false
      });
    }

    modifyData(data) {
      this.setState({...this.state,
        visible: { title: '修改', ...data}
      });
    }
    deletaData({id}) {
      const data = this.state.allItems.filter(item => item.id !== id);
      this.setState({...this.state, allItems: data });
      AsyncStorage.setItem("allItems", JSON.stringify(data));
    }
    saveData({ id, text, labels }) {
      if (!text) return null;
      const { allItems } = this.state;
      const data = id ?
        allItems.map(item => item.id === id ? {...item, text, labels} : item)
        : [...this.state.allItems, { text, labels, id: this.getId()}];
      this.setState({...this.state, allItems: data, visible: false });
      AsyncStorage.setItem("allItems", JSON.stringify(data));
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
            title="呷ㄟ"
          />
          <ScrollView style={{ width: '100%' }}>
            {this.getData()}
          </ScrollView>
          <Footer navigation={this.props.navigation} {...footerProps}/>
          {
            this.state.visible && <ItemDialog
              labels={this.getAllLabels()}
              data={this.state.visible}
              save={this.saveData.bind(this)}
              hide={() => this.setState({...this.state, visible: false})}
            />
          }
        </View>
      );
    }
}
