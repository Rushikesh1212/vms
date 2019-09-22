import React from 'react';
import {
  ScrollView,
  Text,
  View,
  BackHandler,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Image,TextInput,
  Platform,
  SafeAreaView,
  Alert
} from 'react-native';
import { createSwitchNavigator, createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

import InputScrollView from 'react-native-input-scroll-view';
import SplashScreen from 'react-native-splash-screen';
import Carousel from 'react-native-banner-carousel';
// import Carousel from 'react-native-snap-carousel';
import ValidationComponent from "react-native-form-validator";
import { Button, Icon } from "react-native-elements";
import { TextField } from "react-native-material-textfield";
import { ifIphoneX } from 'react-native-iphone-x-helper';

import styles from './styles.js';
// import Logo from '../../layouts/Logo/Logo.js';
// import HeadText from '../../layouts/HeadText/HeadText.js';
import {colors,sizes} from '../../config/styles.js';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import HeaderBar from "../../layouts/HeaderBar/HeaderBar.js";
import Dashboard1 from "../Dashboard/Dashboard.js";
// const DashboardContainer = createAppContainer(Dashboard1);

const window = Dimensions.get('window');

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;
 

export default class CarouselPage extends ValidationComponent{
  constructor(props){
    super(props);
    this.state={
    };
  }

  componentDidMount() {
  }



render(){
    const { navigate,dispatch } = this.props.navigation;
    return (

          <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled" >
            <HeaderBar navigate={navigate}
              navigation = {this.props.navigation}
              headerTitle="Team Congress"
              toggle={()=>this.toggle.bind(this)} 
              openControlPanel={()=>this.openControlPanel.bind(this)}
            />

                <Dashboard1 />
          </ScrollView>

    );
    
  }
}
