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
    homeAction: {
      width: 200,
      height: 100,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:20,
      borderWidth: 1,
      backgroundColor:color.blue,
      borderColor: color.blue,
      margin: 10,
    },
    hideIcon: {
      justifyContent: 'flex-end',
      width: '100%',
      flexDirection: 'row',
      height: 50
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
      borderTopWidth: 2,
      borderTopColor: color.blue,
    },
    dialogItem: {
      alignItems: 'center',
      flexDirection: 'row',
      margin: 10,
    },
    itemTitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    inputNoBorder: {
      flex:1,
      fontSize: 16,
      marginHorizontal: 5,
    },
    chooseArea: {
      height: 200,
      borderRadius: 5,
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
      width: 35,
      height: 35,
    },
    textIcon: {
      borderColor: '#B97A57',
      backgroundColor: '#B97A57',
      color: 'white',
      borderRadius: 5,
      alignItems: 'center',
      fontSize: 16,
      padding: 5,
      marginLeft: 5,
      maxWidth: 80,
      justifyContent: 'center',
    },
    rowView: {
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
    icon: {
      color: '#fff',
      fontSize: 30,
      width: 60,
      textAlign: 'center'
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
    borderLeftWidthBlue: {
      borderLeftWidth: 2,
      borderLeftColor: color.blue,
    },
    padding10: {
      padding: 10,
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
    flexCE1: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'flex-end',
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
