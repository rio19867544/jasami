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

export default class add extends Component {
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
        <View  key={'list' + index} style={styles['listItem' + mod(index)]}>
          <Text style={styles.item}>{data}</Text>
          <Text style={styles.button} onPress={this.deletaData.bind(this, index)}>Delete</Text>
        </View>
      ));
    }
    deletaData(index) {
      if (typeof index !== 'number' && index < 0) return;
      const data = this.state.allItem.filter((item, $index) => $index !== index);
      this.setState({...this.state, allItem: data });
      AsyncStorage.setItem("allItem", JSON.stringify(data));
    }
    saveData() {
      if (!this.state.text) return null;
      const data = [...this.state.allItem, this.state.text];
      this.setState({...this.state, allItem: data, text: '' });
      AsyncStorage.setItem("allItem", JSON.stringify(data));
    }
    clearData() {
       AsyncStorage.setItem("allItem", '');
       this.setState({allItem: [], text: '' });
    }

    changeNav() {
      this.props.navigator.replace({name: 'info'});
    }

    render() {
      return (
        <View style={styles.container}>
         <KeyboardAvoidingView behavior='padding' style={styles.toolbar}>
           <Text onPress={this.changeNav.bind(this)} style={styles.info}>Info</Text>
               <TextInput
                  style={styles.formInput}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                />
           <Text onPress={this.saveData.bind(this)} style={styles.button}>Add</Text>
         </KeyboardAvoidingView>
         <View style={styles.lengthBar}>
          <Text>資料筆數：{this.state.allItem.length}</Text>
         </View>
          <ScrollView style={styles.list}>
            {this.getData()}
         </ScrollView>
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
    list: {
      width: '100%',
    },
    listItem0: {
      flexDirection:'row',
      backgroundColor: "#30B2CE",
      alignItems: 'center',
    },
    listItem1: {
      flexDirection:'row',
      backgroundColor: "#263F44",
      alignItems: 'center',
    },
    item: {
      padding: 10,
      color: 'white',
      flex:1,
    },
    toolbar:{
      backgroundColor:'#959393',
      flexDirection:'row',
      alignItems: 'center',
      height: 50,
    },
    button:{
      color:'#fff',
      textAlign:'center',
      padding: 10,
    },
    info: {
      width: 80,
      borderRadius: 5,
      borderWidth:1,
      backgroundColor: '#fff',
      color: '#7092BE',
      borderColor: '#7092BE',
      textAlign:'center',
      marginHorizontal: 10,
      paddingVertical: 10,
    },
    formInput: {
      height: 40,
      fontSize: 13,
      flex:1,
    },
    lengthBar: {
      width: '100%',
      alignItems: 'flex-end',
      padding: 10,
    },
});
