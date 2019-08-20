import React, { Component } from "react";
import PropTypes from "prop-types";
// import Meteor, { Accounts, createContainer } from "react-native-meteor";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image
} from "react-native";
import { Button, Icon, Avatar, CheckBox } from "react-native-elements";

import ValidationComponent from "react-native-form-validator";

import styles from "./styles.js";
// import Loading from '../../components/Loading/Loading.js';

export default class Notification extends ValidationComponent {
  constructor(props) {
    super(props);
    // console.log(this.props);

    this.state = {
      country             : 0,
      notification        : []

    };
  }
  

  

  renderRow = () =>{
      return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center', marginTop:10}}>
          <Text>No Notifications</Text>
        </View>
    );
  }
  
   
  render() {
    return (
      <View>
        <View style={[{borderBottomWidth: 1, padding:10, borderColor: '#fff'},styles.notifView]}>
          <View style={{maxHeight: 80, flexDirection:'row', justifyContent: 'center'}} >
            <TouchableOpacity onPress={this.props.closeControlPanel()} style={{alignItems:'center',justifyContent:'center'}}>
              <View>
                <Icon size={25} name='close' type='evilicon' color='#fff' />
              </View>
            </TouchableOpacity>
            <Text style={{textAlign:'center',flex: 1, fontSize: 25, color: '#fff',fontFamily:"Montserrat-Regular"}}>
              Notifications
            </Text>
          </View>
        </View>
      <ScrollView>
        <View style={{alignItems:'center'}}>
          <Text style={{fontSize:15,fontFamily:"Montserrat-Regular"}}>
            No Notifications
          </Text>
        </View>
      </ScrollView>
      </View>
    );
  }
}
// export default createContainer(props => {
  
//   return {
//     count : 0,
//     notification:[]
//   };
// }, Notification);
