/**
 * Created by rl3n on 2017/8/2.
 */
import React, { Component } from 'react';
import {
  Image,
} from 'react-native';

import FadeOutView from '../components/fadeOutView.js';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <FadeOutView style={{flex:1, width: 1000, alignItems: 'center', justifyContent: 'center', backgroundColor: 'powderblue'}}>
        <Image source={require('../img/ic_launcher.png')}/>
      </FadeOutView>
    );
  }
}
