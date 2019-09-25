import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
// import Meteor from "react-native-meteor";
import axios from "../../config/axios.js";

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    var token ;
        var user_id ;
         const userToken = await AsyncStorage.getItem('token');
        AsyncStorage.multiGet(['token','user_id'])
          .then((data)=>{
          // console.log('user',data)
          token = data[0][1]
          user_id = data[1][1]
        })
        axios.get('/api/users/get/useravailable')
          .then(res=>{
            console.log(res)
            if(res.data == "NOT_VALID"){
              this.props.navigation.navigate(userToken ? 'App' : 'Auth');
            }
          })
        // console.log('userToken',userToken)
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}