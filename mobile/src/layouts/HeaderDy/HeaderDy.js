import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import { Header, Icon } from "react-native-elements";
// import { NavigationActions } from "react-navigation";
// import { TextField } from "react-native-material-textfield";
// import ValidationComponent from 'react-native-form-validator';
// import { robotoWeights } from 'react-native-typography';

import styles from "./styles.js";
// import Loading from "../Loading";

export default class HeaderDy extends React.Component {
  // constructor(props) {
  //   super(props);
  //   let username = "";
  //   if (this.props.username) {
  //     username = this.props.username;
  //   }
  //   this.state = {
  //     username: username,
  //     user: "",
  //     userError:'',
  //     passwordError:'',
  //     password: "",
  //     error: null
  //   };
  // }
  // componentWillMount() {
  //   this.mounted = true;
  //   // console.log("mounted login form");
  // }
  // componentDidMount() {}
  // componentWillUnmount() {
  //   this.mounted = false;
  //   // console.log("unmounting login form");
  // }
  // handleError = error => {
  //   if (this.mounted) {
  //     this.setState({ error });
  //   }
  // };

  render() {
    // const resetAction = NavigationActions.reset({
    //   index: 0,
    //   actions: [NavigationActions.navigate({ routeName: "ServiceList" })]
    // });
    const { goBack, headerTitle } = this.props;
    return (
      <Header
        backgroundColor={'transparent'}
        centerComponent={ <Text style={{color:'#333',textAlign:'left',fontFamily:"Montserrat-SemiBold",fontSize:16,}}>{headerTitle}</Text>}
        leftComponent={
          <TouchableOpacity  onPress={()=>  this.props.goBack(null)} >
            <Icon size={25} name='arrow-back' type='material-icons' color='#333' />
          </TouchableOpacity>
        }
        outerContainerStyles={{borderColor:'transparent',backgroundColor:"transparent"}}
        innerContainerStyles={{marginTop:0,paddingTop:0,backgroundColor:"transparent"}}
         containerStyle={styles.container}
        />
    );
  }
}
