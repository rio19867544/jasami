import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default class info extends Component {
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
      const mod = num => num % 2;
      return datas.map((data, index) => (
        <View style={styles.itemView}  key={'item' + index} >
          <Text style={styles.item} numberOfLines={3}>{data}</Text>
        </View>
      ));;
    }

    changeNav() {
      this.props.navigator.push({name: 'add'});
    }
    handleScroll(event) {
      // console.log(event.nativeEvent.contentOffset.y);
    }
    start() {
      const itemsLenth = this.state.allItem.length;
      this.setState({
        ...this.state,
        start: true,
      });
      let i = 0;
      this.timer = setInterval(() => {
        this.list.scrollTo({y: (i % itemsLenth) * 160});
        i++;
      } ,1);
    }
    stop() {
      clearInterval(this.timer);
      this.setState({
        ...this.state,
        start: false,
      });
    }
    render() {
      return (
        <View>
         <View style={styles.toolbar}>
           {!this.state.start ? <Text onPress={this.changeNav.bind(this)} style={styles.add}>Add Item</Text>: <Text style={styles.space}/>}
           <Text style={styles.title}>呷瞎咪</Text>
           <Text style={styles.space}/>
         </View>
          <ScrollView style={styles.list} onScroll={this.handleScroll.bind(this)} ref={ref => this.list = ref} showsVerticalScrollIndicator ={false}>
            {this.getData()}
         </ScrollView>
          <View style={styles.actionBtn}>
             <TouchableOpacity style={styles.action} onPress={!this.state.start ? this.start.bind(this) : this.stop.bind(this)}>
              <Text style={styles.actionText}>{!this.state.start ? 'Start' : 'Close'}</Text>
             </TouchableOpacity>
          </View >
       </View>
      );
    }
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    rowView: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rowView1: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    columnView: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: 300,
    },
    rowtextView: {
      borderRightWidth:1,
      borderBottomWidth:1,
      borderTopWidth:1,
      borderColor: 'brown',
      flexGrow: 1,
      height: 50,
      textAlign: 'center',
      lineHeight: 40,
      fontSize: 20,
    },
    columntextView: {
      borderRightWidth:1,
      borderLeftWidth:1,
      borderBottomWidth:1,
      borderColor: 'brown',
      flexGrow: 1,
      width:60,
      textAlign: 'center',
      lineHeight: 40,
      fontSize: 20,
    },
    rowtextViewSelected: {
      borderRightWidth:1,
      borderBottomWidth:1,
      borderTopWidth:1,
      borderColor: 'brown',
      flexGrow: 1,
      height: 50,
      backgroundColor: 'red',
      textAlign: 'center',
      lineHeight: 40,
      fontSize: 20,
    },
    columntextViewSelected: {
      borderRightWidth:1,
      borderLeftWidth:1,
      borderBottomWidth:1,
      borderColor: 'brown',
      flexGrow: 1,
      width:60,
      backgroundColor: 'red',
      textAlign: 'center',
      lineHeight: 40,
      fontSize: 20,
    },
    list: {
      height: 160,
      marginTop: 50,
      marginBottom: 50,
      paddingLeft: 20,
      paddingRight: 20,
    },
    itemView: {
      height:160,
      alignItems: 'center',
      justifyContent: 'center',
      flex:1,
    },
    item: {
      fontSize: 40,
      color: 'black',
    },
    toolbar:{
      backgroundColor:'#959393',
      flexDirection:'row',
      alignItems: 'center',
      height: 50,
      borderRadius: 5,
    },
    add:{
      borderRadius: 5,
      borderWidth:1,
      backgroundColor: '#fff',
      color: '#7092BE',
      borderColor: '#7092BE',
      textAlign:'center',
      marginHorizontal: 10,
      width: 80,
      padding: 10,
    },
    space:{
      marginHorizontal: 10,
      width: 80,
      paddingBottom: 10,
      paddingTop: 10,
    },
    actionBtn:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    action: {
      width: 200,
      height: 50,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:10,
      borderWidth: 1,
      backgroundColor:'#68a0cf',
      borderColor: '#68a0cf',
      margin: 10,
    },
    actionText: {
      fontSize: 20,
    },
    title: {
      fontSize: 30,
      textAlign: 'center',
      color: '#fff',
      flex:1,
    },
});
