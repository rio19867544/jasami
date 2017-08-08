import React, { Component } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from '../style/styles.js';
import ChooseLabels from '../components/chooseLabels.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FilterDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maatai: this.getMaatai(),
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  close() {
    this.props.hide();
  }
  start() {
    const itemsLenth = this.props.items.length;
    this.setState({
      ...this.state,
      maatai: this.getMaatai(),
      start: true,
      meal: '',
    });
    let i = 0;
    this.timer = setInterval(() => {
      const pos = i++ % itemsLenth;
      this.setState({
        ...this.state,
        pos,
      });
    } ,50);
  }
  stop() {
    clearInterval(this.timer);
    const { maatai } = this.state;
    const all = [ ...maatai[0], ...maatai[1], ...maatai[2].reverse(), ...maatai[3].reverse()];
    this.setState({
      ...this.state,
      start: false,
      meal: all[this.state.pos],
    });
  }
  getMaatai(items) {
    const result  = [...(items || this.props.items)].sort(() =>  Math.random() > 0.5 ? 1 : -1).reduce((target, item, index) => {
      const i = index % 4;
      target[i].push(item);
      return target;
    }, [[],[],[],[]]);
    this.len = result.map((item, i ) => result.slice(0, i).reduce((num, arr) => (num + arr.length), 0));
    return result;
  }
  getStyle(type, index) {
   const css = {
     row: 'rowtextView',
     column: 'columntextView',
   };
   const select = {
     row: 'rowtextViewSelected',
     column: 'columntextViewSelected',
   };
   return index === this.state.pos ? select[type] : css[type];
  }
  render() {
    return (
      <Modal
        animationType={"fade"}
        transparent={true}
        onRequestClose={this.close.bind(this)}
        >
          <View style={styles.mask}>
            <TouchableOpacity style={styles.hideIcon}
              onPress={this.close.bind(this)}>
              <Icon name="remove" size={50} style={{color: 'white'}}/>
            </TouchableOpacity>
            <View style={styles.container, {backgroundColor: 'white'}}>
               <View style={styles.rowView}>{
                   this.state.maatai[0].map((item, i) => {
                     const cnt = this.len[0] + i;
                     return <Text key={'text' + cnt} style={styles[this.getStyle('row', cnt)]}>呷</Text>
                   })
               }
               </View>
               <View style={styles.rowView}>
                 <View  style={styles.columnView}>{
                    this.state.maatai[3].map((item, i) => {
                      const cnt = this.len[3] + i;
                      return <Text key={'text' + cnt} style={styles[this.getStyle('column', cnt)]}>呷</Text>
                    }).reverse()
                  }
                 </View>
                 <View style={styles.itemView}>
                   <Text style={styles.item} numberOfLines={4}>
                     {this.state.meal && this.state.meal.text}
                   </Text>
                 </View>
                 <View style={styles.columnView}>
                   {
                    this.state.maatai[1].map((item, i) => {
                      const cnt = this.len[1] + i;
                      return <Text key={'text' + cnt} style={styles[this.getStyle('column', cnt)]}>呷</Text>
                    })
                  }
                 </View>
               </View>
               <View style={styles.rowView}>
                 {
                  this.state.maatai[2].map((item, i) => {
                    const cnt = this.len[2] + i;
                    return <Text key={'text' + cnt} style={styles[this.getStyle('row', cnt)]}>呷</Text>
                  }).reverse()
                 }
               </View>
             </View>
             <TouchableOpacity style={styles.action}
               onPress={this.state.start ? this.stop.bind(this) : this.start.bind(this)}>
               <Text style={[styles.size24, {color: 'white'}]}>
                 { this.state.start ? '停!!!' : '開始'}
               </Text>
             </TouchableOpacity>
          </View>
      </Modal>
    );
  }
}
