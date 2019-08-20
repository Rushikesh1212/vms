
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App.js';
console.disableYellowBox = true;

export default class RnrfDemo extends Component {
  render() {
    return (<App/>);
  }
}
AppRegistry.registerComponent('vms', () => RnrfDemo);
