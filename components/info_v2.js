import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

export default class info extends Component {
    constructor(props){
       super(props);
       this.state = { allItem: []};
     }
    componentDidMount() {
       AsyncStorage.getItem("allItem").then((value) => {
          this.setState({"allItem": JSON.parse(value) || [], maatai: this.getMaatai(JSON.parse(value))});
       }).done();
    }

    // getData() {
    //   const datas = (this.state && this.state.allItem) || [];
    //   const mod = num => num % 2;
    //   this.datas =  datas.map((data, index) => (
    //     <View style={styles.itemView}  key={'item' + index} >
    //       <Text style={styles.item} numberOfLines={3}>{data}</Text>
    //     </View>
    //   ));
    //   return this.datas;
    // }

    changeNav() {
      this.props.navigator.replace({name: 'add'});
    }
    handleScroll(event) {
      // console.log(event.nativeEvent.contentOffset.y);
    }
    start() {
      const itemsLenth = this.state.allItem.length;
      if (itemsLenth < 2) {
        Alert.alert('Notice!', '沒有兩個是要隨機個毛逆~點左上角新增啦!');
      } else {
        this.getMaatai();
        this.setState({
          ...this.state,
          maatai: this.getMaatai(),
          start: true,
          meal: '',
        });
        let i = 0;
        // this.timer = setInterval(() => {
        //   this.list.scrollTo({y: (i % itemsLenth) * 160});
        //   i++;
        // } ,1);

        this.timer = setInterval(() => {
          const pos = i++ % itemsLenth;
          this.setState({
            ...this.state,
            pos,
          });
        } ,50);
      }
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
      const result  = [...(items || this.state.allItem)].sort(() =>  Math.random() > 0.5 ? 1 : -1).reduce((target, item, index) => {
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
        <View  style={styles.container}>
         <View style={styles.toolbar}>
           {!this.state.start ? <Text onPress={this.changeNav.bind(this)} style={styles.add}>Add Item</Text>: <Text style={styles.space}/>}
           <Text style={styles.title}>呷瞎咪</Text>
           <Text style={styles.space}/>
         </View>
         {
           this.state.maatai && <View>
              <View style={styles.rowView}>{
                  this.state.maatai[0].map((item, i) => {
                    const cnt = this.len[0] + i;
                    return <Text key={'text' + cnt} style={styles[this.getStyle('row', cnt)]}>呷</Text>
                  })
              }</View>
              <View style={styles.rowView}>
               <View  style={styles.columnView}>{
                   this.state.maatai[3].map((item, i) => {
                     const cnt = this.len[3] + i;
                     return <Text key={'text' + cnt} style={styles[this.getStyle('column', cnt)]}>呷</Text>
                   }).reverse()
               }</View>
               <View style={styles.itemView}><Text style={styles.item} numberOfLines={4}>{this.state.meal}</Text></View>
               <View style={styles.columnView}>{
                   this.state.maatai[1].map((item, i) => {
                     const cnt = this.len[1] + i;
                     return <Text key={'text' + cnt} style={styles[this.getStyle('column', cnt)]}>呷</Text>
                   })
               }</View>
              </View>
               <View style={styles.rowView1}>{
                   this.state.maatai[2].map((item, i) => {
                     const cnt = this.len[2] + i;
                     return <Text key={'text' + cnt} style={styles[this.getStyle('row', cnt)]}>呷</Text>
                   }).reverse()
               }</View>
            </View>
         }
          <View style={styles.actionBtn}>
             <TouchableOpacity style={styles.action} onPress={!this.state.start ? this.start.bind(this) : this.stop.bind(this)}>
              <Text style={styles.actionText}>{!this.state.start ? 'Start' : 'Close'}</Text>
             </TouchableOpacity>
          </View >
       </View>
      );
    }
}

//   <ScrollView style={styles.list} onScroll={this.handleScroll.bind(this)} ref={ref => this.list = ref} showsVerticalScrollIndicator ={false}>
//     {this.getData()}
//     </ScrollView>
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
