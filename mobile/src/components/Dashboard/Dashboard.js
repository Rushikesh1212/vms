import React, { Component } from "react";
import { StyleSheet,Text,View,TextInput,BackHandler,TouchableOpacity, ScrollView,Platform,Dimensions, Image,ImageBackground,Alert} from "react-native";
import { Header, Button, Icon,Card,Avatar} from "react-native-elements";
import { NavigationActions,createMaterialTopTabNavigator,createAppContainer,createStackNavigator } from "react-navigation";
import ImageOverlay from "react-native-image-overlay";
import PropTypes from "prop-types";
import styles from "../VoterProfile/styles.js";
import HeaderDy from "../../layouts/HeaderDy/HeaderDy.js";
import List1 from "../List/List1.js";
import List2 from "../List/List2.js";
import List3 from "../List/List3.js";
import HeaderBar from "../../layouts/HeaderBar/HeaderBar.js";
import SearchList from "../SearchList/SearchList.js";
import VoterProfile from "../VoterProfile/VoterProfile.js";
import Voter from "../VoterList/Voter.js";
import BoothList from "../VoterList/BoothList.js";
import AgeList from "../VoterList/AgeList.js";
import SurnameList from "../VoterList/SurnameList.js";
import ColorList from "../VoterList/ColorList.js";
import AllVoterList from "../VoterList/AllVoterList.js";
import Distribution from "../Distribution/Distribution.js";
import DisColorWise from "../Distribution/DisColorWise.js";
import Analysis from "../Analysis/Analysis.js";
import UserList from "../UserList/UserList.js";
import VoterListLD from "../LastDay/VoterListLD.js";
import FamilyList from "../FamilyList/FamilyList.js";


const window = Dimensions.get('window');

const Dashboard = createMaterialTopTabNavigator(
  {
    "Voter Management": {screen:List1},
    "Analysis": {screen:List2},
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions:{
      activeTintColor:'#000',
      inactiveTintColor:'#666',
      showIcon: true,
      showLabel:true,
      tabStyle: {
        paddingVertical : 0,
        marginTop: -20,
      },
      labelStyle: {
        textAlign: 'center',
        fontWeight: 'bold'
      },
      indicatorStyle: {
        borderBottom:2,
        color: '#337ab7'
      },
      style:{
        backgroundColor:'#fff',
        color:'#000',
      }
    },
  }
)

const Dashboard1 = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      header: null
    }
  },

  SearchList: {
    screen: SearchList,
    navigationOptions: {
      header: null
    }
  },

  Voter: {
    screen: Voter,
    navigationOptions: {
      header: null
    }
  },

  BoothList: {
    screen: BoothList,
    navigationOptions: {
      header: null
    }
  },

  AgeList: {
    screen: AgeList,
    navigationOptions: {
      header: null
    }
  },
  
  SurnameList: {
    screen: SurnameList,
    navigationOptions: {
      header: null
    }
  },
  
  ColorList: {
    screen: ColorList,
    navigationOptions: {
      header: null
    }
  },

  AllVoterList: {
    screen: AllVoterList,
    navigationOptions: {
      header: null
    }
  },

  Distribution: {
    screen: Distribution,
    navigationOptions: {
      header: null
    }
  },

  DisColorWise: {
    screen: DisColorWise,
    navigationOptions: {
      header: null
    }
  },

  Analysis: {
    screen: Analysis,
    navigationOptions: {
      header: null
    }
  },

  VoterProfile: {
    screen: VoterProfile,
    navigationOptions: {
      header: null
    }
  },

  FamilyList: {
    screen: FamilyList,
    navigationOptions: {
      header: null
    }
  },

  VoterListLD: {
    screen: VoterListLD,
    navigationOptions: {
      header: null
    }
  },

  UserList: {
    screen: UserList,
    navigationOptions: {
      header: null
    }
  },
})

export default createAppContainer(Dashboard1);
