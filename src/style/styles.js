import { StyleSheet } from 'react-native';
const color = {
  blue: '#68a0cf',
};
export default StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bar: {
      flexDirection:'row',
      alignItems: 'center',
      height: 50,
      width: '100%',
    },
    footer: {
      bottom:0,
      backgroundColor: color.blue,
      justifyContent: 'center'
    },
    head:{
      // backgroundColor:'#959393',
      backgroundColor: color.blue,
    },
    action: {
      width: 200,
      height: 50,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:10,
      borderWidth: 1,
      backgroundColor:color.blue,
      borderColor: color.blue,
      margin: 10,
    },
    listItem: {
      flexDirection:'row',
      backgroundColor: "#cee7f3",
      padding: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    mask: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    dialog: {
      width: 350,
      height: 400,
      borderRadius: 10,
    },
    dialogSmall: {
      width: 300,
      height: 180,
      borderRadius: 10,
    },
    dialogTitle: {
      borderBottomWidth: 2,
      borderBottomColor: color.blue,
      fontSize: 24,
      paddingVertical: 5,
      paddingHorizontal: 10,
      textAlign: 'center',
      width: '100%',
      fontWeight: 'bold',
    },
    dialogFooter:{
      bottom: 0,
      height: 40,
      borderTopWidth: 1,
      borderTopColor: '#b7b7b7',
    },
    dialogItem: {
      alignItems: 'center',
      flexDirection: 'row',
      margin: 10,
    },
    itemTitle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    input: {
      borderWidth: 1,
      borderColor: '#b7b7b7',
      height: 35,
      borderRadius: 5,
      fontSize: 12,
      flex:1,
    },
    inputNoBorder: {
      flex:1,
      height: 35,
      borderRadius: 5,
      fontSize: 12,
    },
    chooseArea: {
      borderWidth: 1,
      borderColor: '#b7b7b7',
      height: 200,
      borderRadius: 5,
      marginTop: 10,
    },
    chooseItem:{
      flexDirection:'row',
      backgroundColor: "white",
      padding: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    label: {
      width: 40,
      height: 40,
    },
    labelSmall: {
      marginLeft: 5,
      width: 30,
      height: 30,
    },
    textIcon: {
      borderWidth: 2,
      borderColor: '#b7b7b7',
      backgroundColor: 'white',
      borderRadius: 20,
      maxHeight: 40,
      maxWidth: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    // basic property
    borderBlack: {
      borderWidth:1,
      borderColor: 'black',
    },
    borderTop: {
      borderTopWidth: 1,
      borderTopColor: '#b7b7b7',
    },
    borderLeft: {
      borderLeftWidth: 1,
      borderLeftColor: '#b7b7b7',
    },
    padding10: {
      padding: 10,
    },
    icon: {
      color: '#fff',
      fontSize: 30,
      width: 80,
      textAlign: 'center'
    },
    flex1: {
      flex:1,
    },
    flexC1: {
      flex:1,
      alignItems: 'center',
    },
    flexCC1: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    size24: {
      fontSize: 24,
      textAlign: 'center',
    },
    size20: {
      fontSize: 20,
      textAlign: 'center',
    },
    size16: {
      fontSize: 16,
      textAlign: 'center',
    },
    white: {
      color: '#fff',
    },
    bold: {
      fontWeight: 'bold',
    },
    bgWhite: {
      backgroundColor: 'white',
    },
    flexRow:{
      flexDirection: 'row',
    },
    mLeft15: {
      marginLeft: 15,
    }

});
