import React, { Component } from "react";
import {View, Image } from "react-native";
import styles from "./styles";

export default class Logo extends Component{
  render() {
    return (
      <View style={styles.container}>
        {/*<Image
          // style={styles.imgDisplay}
          resizeMode="contain"
          source={require("../../images/Windfaller_logo.png")}
        />*/}
      </View>
    );
  }
}
