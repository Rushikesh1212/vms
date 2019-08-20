import React, { Component } from "react";
import PropTypes from "prop-types";
import HomeStack from "./config/routes.js";
// import AuthStack  from "./config/routes.js";
import settings from "./config/settings.js";
import SplashScreen from 'react-native-splash-screen';
import axios                from 'axios';
// import Loading from "./components/Loading/Loading.js";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
  Alert
} from 'react-native';
import { createAppContainer } from 'react-navigation';

const HomeStackContainer = createAppContainer(HomeStack);
// const AuthStackContainer = createAppContainer(AuthStack);


// Meteor.connect(settings.METEOR_URL);


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // const { status, loggingIn } = this.props;
      setTimeout(() => {
      SplashScreen.hide();
    }, 1000)
  }

  render() {
    // const { status, user, loggingIn } = this.props;
    // // console.log('loggingIn =>',loggingIn ,"status = ",status,"user = ",user);
    // if (status.connected === false || loggingIn) {
    //   return <Loading />;
    //   // return (<View>
    //   //         <ActivityIndicator />
    //   //         <StatusBar barStyle="default" />
    //   //       </View>);
    // } else if (user != null) {
    //   return (<AuthStackContainer />);
    // } 
    return (<HomeStackContainer />);
  }
}
// App.propTypes = {
//   status    : PropTypes.object,
//   user      : PropTypes.object,
//   loggingIn : PropTypes.bool
// };

