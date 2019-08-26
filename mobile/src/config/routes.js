import { createSwitchNavigator, createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';

import AuthLoadingScreen from '../layouts/AuthLoadingScreen/AuthLoadingScreen.js';

import LogIn from '../components/LogIn/LogIn.js';
import SignUp from '../components/SignUp/SignUp.js';
import SignUpOTP from '../components/SignUpOTP/SignUpOTP.js';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword.js';
import ForgotPasswordOTP from '../components/ForgotPasswordOTP/ForgotPasswordOTP.js';
import ResetPassword from '../components/ResetPassword/ResetPassword.js';

import UserProfile   from '../components/UserProfile/UserProfile.js';
import EditUserProfile   from '../components/UserProfile/EditUserProfile.js';
import ChangePassword   from '../components/UserProfile/ChangePassword.js';




import CarouselPage from '../components/CarouselPage/CarouselPage.js';

import List1 from '../components/List/List1.js';
import List2 from '../components/List/List2.js';
import List3 from '../components/List/List3.js';
import Dashboard from '../components/Dashboard/Dashboard.js';

import  SearchList from '../components/SearchList/SearchList.js';
import  Notification from '../components/Notification/Notification.js';

import PackagePlanList from '../components/PackagePlan/PackagePlanList.js';
import PackagePlanInfo from '../components/PackagePlan/PackagePlanInfo.js';
import Menu from '../layouts/Menu/Menu.js';

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


const HomeStack = createStackNavigator({

  LogIn: {
    screen: LogIn,
    navigationOptions: {
      header: null
    }
  },
  
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

  List1: {
    screen: List1,
    navigationOptions: {
      header: null
    }
  },

  List2: {
    screen: List2,
    navigationOptions: {
      header: null
    }
  },
  
  List3: {
    screen: List3,
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
  
  PackagePlanList: {
    screen: PackagePlanList,
    navigationOptions: {
      header: null
    }
  },
  
  PackagePlanInfo: {
    screen: PackagePlanInfo,
    navigationOptions: {
      header: null
    }
  },
  
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      header: null
    }
  },

  ForgotPasswordOTP: {
    screen: ForgotPasswordOTP,
    navigationOptions: {
      header: null
    }
  },
  
  ResetPassword: {
    screen: ResetPassword,
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
  
  EditUserProfile: {
    screen: EditUserProfile,
    navigationOptions: {
      header: null
    }
  },

  Notification: {
    screen: Notification,
    navigationOptions: {
      header: null
    }
  },
 
},{
  transitionConfig: TransitionConfiguration
});

const drawer = createDrawerNavigator({
  Home : {
    screen: HomeStack
  }
},{
  contentComponent: Menu
});

// const AuthStack = createStackNavigator({
 

  
// });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading : AuthLoadingScreen,
    App         : drawer,
    // Auth        : AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
