import React from 'react';
import { Animated, Text, View } from 'react-native';
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter';

export default class FadeOutView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(1),  // Initial value for opacity: 0
  }

  componentDidMount() {
    RCTDeviceEventEmitter.addListener('start-fade-out', this.startAnimate.bind(this));
  }
  startAnimate() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 0,                   // Animate to opacity: 1 (opaque)
        duration: 1000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
