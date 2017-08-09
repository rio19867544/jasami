/**
 * Created by rl3n on 2017/8/2.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    AsyncStorage,
    TouchableOpacity,
    Image,
    ScrollView,
    Alert,
} from 'react-native';
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter';
import FadeInView from '../components/fadeInView.js';
import LandingPage from './landingPage.js';
import styles from '../style/styles.js';
import Footer from '../components/footer.js';
import Head from '../components/head.js';
import FilterDialog from '../components/filterDialog.js';
import Maatai from '../components/maataiDialog.js';
import defaultLabels from '../data/defaultLabels.js';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = { allItems: []};
  }
  componentDidMount() {
    this.getAsyncStorageData(true);
    RCTDeviceEventEmitter.addListener('update-state', this.getAsyncStorageData.bind(this));
  }
  getAsyncStorageData(closeLanding = false) {
    AsyncStorage.multiGet(['allItems', 'allLabels']).then((stores) => {
      const data = stores.reduce((pre, [key, value]) => {
        return {
          ...pre,
          [key]: (value && JSON.parse(value)) || [],
        }
      },{});
      if (closeLanding) {
        RCTDeviceEventEmitter.emit('start-fade-out');
        setTimeout(() => {
          this.setState({...data, closeLandingPage: true});
        }, 1000);
      } else {
        this.setState(data);
      }
    }).done();
  }
  getAllLabels() {
    const datas = (this.state && this.state.allLabels) || [];
    return defaultLabels.concat(datas);
  }
  filterStatus() {
    this.setState({...this.state, isFilter: !this.state.isFilter});
  }
  handleFilter({labels}) {
    const randomItems = this.state.allItems
      .filter(item => item.labels.some(id => labels.indexOf(id) !== -1));
    this.setState({
      ...this.state,
      labels,
      randomItems,
      isFilter: false,
      isMaatai: false,
    });
  }
  start() {
    const { randomItems, allItems, isMaatai } = this.state;
    const itemsLenth = (randomItems || allItems).length;
    if (itemsLenth < 4) {
      Alert.alert('哩賣亂!!', '沒有四個是要隨機個毛逆~快去新增!');
    } else {
      this.setState({...this.state, isMaatai: !isMaatai});
    }
  }
  render() {
    const { closeLandingPage, isMaatai, labels, allItems, randomItems } = this.state;
    return (
      <View style={styles.container}>
        {!closeLandingPage && <View style={{position: 'absolute', zIndex: 10, height: '100%'}}><LandingPage/></View>}
        <Head navigation={this.props.navigation}
            needFilter={this.filterStatus.bind(this)}/>
        <View style={styles.container}>
          { isMaatai &&
            <Maatai
              items={randomItems || allItems}
              hide={() => this.setState({...this.state, isMaatai: false})}
            />
          }
          <TouchableOpacity style={styles.homeAction}
            onPress={this.start.bind(this)}>
            <Text style={[{color: 'white', fontSize: 35}]}>
              點我!!!!!!!
            </Text>
          </TouchableOpacity>
        </View>
        <Footer navigation={this.props.navigation}/>
        {
          this.state.isFilter &&
          <FilterDialog
            labels={this.getAllLabels()}
            data={{ labels, title: '選你要DER'}}
            save={this.handleFilter.bind(this)}
            hide={this.filterStatus.bind(this)}
          />
         }
      </View>
    );
  }
}
