import React, { Component } from "react";
import { StyleSheet,Text,View,TextInput,BackHandler,TouchableOpacity, ScrollView,Platform,Dimensions, Image,ImageBackground,Alert} from "react-native";
import { Header, Button, Icon,Card,Avatar} from "react-native-elements";
import { NavigationActions,createMaterialTopTabNavigator,createAppContainer } from "react-navigation";
import ImageOverlay from "react-native-image-overlay";
// import Animated from 'react-native-reanimated';
import PropTypes from "prop-types";
// import { TabView, SceneMap } from 'react-native-tab-view';
import styles from "../UserProfile/styles.js";

// import MenuBar from '../Menu/Menu.js';
import HeaderDy from "../../layouts/HeaderDy/HeaderDy.js";
// import Checkins from "./Checkins.js";
// import Billing from "./Billing.js";
import List1 from "../List/List1.js";
import List2 from "../List/List2.js";
import List3 from "../List/List3.js";

import SearchList from "../SearchList/SearchList.js";


const window = Dimensions.get('window');

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

const Dashboard1 = createStackNavigator({
  List1: {
    screen: List1,
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
})
// const MainNavigator = createSwitchNavigator({
//     firstPage: {//it's not in TabNavigator<<<<<<<<<<<<<<<<<<<<<<<<<<
//         screen: SearchList,
//     },
//     verification: {//its not in TabNavigator<<<<<<<<<<<<<<<<<<<<<<<<
//         screen: SearchList
//     },
//     dashboard: {
//         screen: TabNavigator
//     }
// })

export default createAppContainer(Dashboard);
// export default  class Checkins extends Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       index: 0,
//       routes: [
//         { key: 'checkins', title: 'Check-Ins' },
//         { key: 'billing', title: 'Billing' },
//       ],
//     };
//   }
//   componentDidMount(){
   
//     // BackHandler.addEventListener('hardwareBackPress',this.androidBackHandler.bind(this));
//   }
//   componentWillUnmount() {
//     // BackHandler.removeEventListener('hardwareBackPress',this.androidBackHandler.bind(this));
//   }

//   toggle() {
//     //
//     let isOpen = !this.state.isOpen;
//       this.setState({
//         isOpen
//       });
//   }

//   updateMenuState(isOpen) {
//     this.setState({ isOpen });
//   }

//   onMenuItemSelected = item =>
//     this.setState({
//       isOpen: false,
//       selectedItem: item,
//   });


//   closeControlPanel = () => {
//     this._drawer.close()
//   }

//   openControlPanel = () => {
//     this._drawer.open()
//   }

//   renderScreen = ({route}) =>{
//     console.log('route',route)
//     switch (route.key){
//       case 'checkins':
//         return <UserProfile navigation={this.props.navigation}/>
//       case 'billing':
//         return SecondRoute
//     }
//   }
//   render(){

//     const { navigate, goBack, state } = this.props.navigation;
//     // const menu = <MenuBar navigate={navigate} />;
   
//     // var navigationView = <NotificationCommon closeDrawer={this.closeDrawer} notificationData={[]} navigation={this.props.navigation}/>

//     return(
//         <Drawer
//             ref={(ref) => this._drawer = ref}
//             // openDrawerOffset={(viewport) => viewport.width-}
//             side="left"
//             >
            
//             <HeaderDy goBack={goBack} headerTitle="History" />
//             <ScrollView  keyboardShouldPersistTaps="handled" >

//               <TabView
//                 navigationState={this.state}
//                 renderScene={this.renderScreen}
//                 swipeEnabled={true}
//                 onIndexChange={index => this.setState({ index })}
//                 initialLayout={{ width: Dimensions.get('window').width }}
//               />
//             </ScrollView>
//         </Drawer>
//     );
//   }
// }


 