/**
 * Created by rl3n on 2017/8/2.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    AsyncStorage,
    TouchableOpacity,
    Image
} from 'react-native';

import FadeInView from '../components/fadeInView.js';
import LandingPage from './landingPage.js';
import styles from '../style/styles.js';
import Footer from '../components/footer.js';
import Head from '../components/head.js';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <LandingPage/> */}
        <Head navigation={this.props.navigation}/>
        <View style={styles.container}>
          <TouchableOpacity style={styles.action}>
            <Text style={styles.size24}>
              Start
            </Text>
          </TouchableOpacity>
        </View>
        <Footer navigation={this.props.navigation}/>
      </View>
    );
  }
}
