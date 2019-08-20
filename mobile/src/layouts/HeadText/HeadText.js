import React, { Component } from "react";
import {View,Text } from "react-native";
import styles from "./styles";

export default class HeadText extends Component{
  render() {
    return (
      <Text style={styles.text}>
        {this.props.text}
      </Text>
    );
  }
}
