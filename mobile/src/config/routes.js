import { createSwitchNavigator, createStackNavigator,createMaterialTopTabNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';

import AuthLoadingScreen from '../layouts/AuthLoadingScreen/AuthLoadingScreen.js';

import LogIn from '../components/LogIn/LogIn.js';

import CarouselPage from '../components/CarouselPage/CarouselPage.js';

import List1 from '../components/List/List1.js';
import List2 from '../components/List/List2.js';
import List3 from '../components/List/List3.js';
// import Dashboard from '../components/Dashboard/Dashboard.js';

import Menu from '../layouts/Menu/Menu.js';
// import HeaderBar from "../../layouts/HeaderBar/HeaderBar.js";
import SearchList from "../components/SearchList/SearchList.js";
import UserProfile from "../components/UserProfile/UserProfile.js";
import Voter from "../components/VoterList/Voter.js";
import BoothList from "../components/VoterList/BoothList.js";
import AgeList from "../components/VoterList/AgeList.js";
import AllVoterList from "../components/VoterList/AllVoterList.js";
import Distribution from "../components/Distribution/Distribution.js";
import Analysis from "../components/Analysis/Analysis.js";

let SlideFromRight = (index, position, width)=>{
  const translateX = position.interpolate({
    inputRange: [index -1,index],
    outputRange: [width, 0],
  })
  return {transform: [{translateX}]}
};

let SlideFromBottom = (index, position, height)=>{
  const translateY = position.interpolate({
    inputRange: [index -1,index],
    outputRange: [height, 0],
  })
  return {transform: [{translateY}]}
};

let SlideFromTop = (index, position, height)=>{
  const translateXY = position.interpolate({
    inputRange: [index-1,index,index+1],
    outputRange: [height,0,0],
  })
  return {transform: [{translateY:translateXY}]}
};

const TransitionConfiguration = () =>{
  return {
    transitionSpec : {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: (sceneProps) => {
      const { layout, position, scene } = sceneProps;
      const width = layout.initWidth;
      const height = layout.initHeight;
      const { index, route } = scene;
      const params = route.params || {};
      const transition = params.transition || 'default';
      return {
        default : SlideFromRight(index, position, width),
        bottomTransition: SlideFromBottom(index, position, height),
        topTransition: SlideFromTop(index, position, height)
      }[transition];
    },
  }
}

const Dashboard = createMaterialTopTabNavigator(
  {
    "List 1": {screen:List1},
    "List 2": {screen:List2},
    "List 3": {screen:List3}
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

const HomeStack = createStackNavigator({
  CarouselPage: {
    screen: CarouselPage,
    navigationOptions: {
      header: null
    }
  },

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

  Analysis: {
    screen: Analysis,
    navigationOptions: {
      header: null
    }
  },

  UserProfile: {
    screen: UserProfile,
    navigationOptions: {
      header: null
    }
  },
  
  LogIn: {
    screen: LogIn,
    navigationOptions: {
      header: null
    }
  }
},{
  transitionConfig: TransitionConfiguration
});


// const HomeStack = createStackNavigator({
  
//   CarouselPage: {
//     screen: CarouselPage,
//     navigationOptions: {
//       header: null
//     }
//   },
  
//   Dashboard: {
//     screen: Dashboard,
//     navigationOptions: {
//       header: null
//     }
//   },
 
// },{
//   transitionConfig: TransitionConfiguration
// });

const drawer = createDrawerNavigator({
  Home : {
    screen: HomeStack
  }
},{
  contentComponent: Menu
});

const AuthStack = createStackNavigator({
 
  LogIn: {
    screen: LogIn,
    navigationOptions: {
      header: null
    }
  }
  
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading : AuthLoadingScreen,
    App         : drawer,
    Auth        : AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
