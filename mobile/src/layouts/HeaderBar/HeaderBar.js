import React from "react";
// import Meteor, { createContainer } from "react-native-meteor";
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  AsyncStorage
} from "react-native";
import { Header, Icon as Icon2,SearchBar ,Avatar } from 'react-native-elements';
import ValidationComponent from "react-native-form-validator";
import Icon from 'react-native-ionicons';
import styles from "./styles.js";
import {colors} from '../../config/styles.js';

import Search from 'react-native-search-box';


export default  class NotificationHeader extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchText:''
    }
  }

  _goBack = () =>{
    this.props.goBack();
  }
  
  UNSAFE_componentWillMount() {
   
  }

    handleNavigation = (screen) =>{
      this.props.navigate(screen);
    
    //   if(this.props.businessData){
      
    // }else{
    //   Alert.alert('','Please Add Your Business Details First');
    // }
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    if(nextProps){
      this.setState({
        count:parseInt(nextProps.count)
      })
    }
  }
  updateSearch = searchText => {
    this.setState({ searchText });
  };

  componentWillUnmount() {
  }

  _goBack = () => {
    this.props.goBack();
  };
  logout(){
    var tokenremove = AsyncStorage.removeItem("token");
    // console.log("tokenremove==>",tokenremove);
    this.props.navigation.navigate("LogIn");
  }
  render() {
    const { headerTitle } = this.props;
    const { navigate, goBack, state } = this.props.navigation;

    return (
      <Header 
        backgroundColor={'#337ab7'}
        placement="left"
        leftContainerStyle={{backgroundColor:'transparent',paddingHorizontal:15}}
        centerContainerStyle={{backgroundColor:'#337ab7',paddingLeft:0,paddingRight:0,paddingTop:0}}
        rightContainerStyle={{backgroundColor:'transparent',paddingHorizontal:15}}
        // leftComponent={
        //  <View style={{justifyContent:'center',alignItems:'center',marginTop:5,alignSelf:'center'}}>
        //     <TouchableOpacity onPress={()=>this.props.goBack()}>
        //       <Icon2 size={25} name='home' type='entypo' color='#eee' />
        //     </TouchableOpacity>
        //   </View>
        // }
        centerComponent={
         <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center',padding:0, height:30,flexDirection:'row'}}>
              <Avatar
                          width={50}
                          height={50}
                          rounded
                          source={require("../../images/congress.png")}
                          activeOpacity={0.9}
              />
            <Text style={{fontFamily:'Montserrat-SemiBold',fontSize:18,color:'#eee',paddingLeft:20}}>{headerTitle}</Text>
          </View>
        }
        rightComponent={
         <View style={{justifyContent:'center',alignItems:'center',marginTop:10,alignSelf:'center'}}>
            <TouchableOpacity onPress={this.logout.bind(this)}>
              <Icon2 size={28} name='sign-out' type='font-awesome' color='#eee' />
            </TouchableOpacity>
          </View>
        }
        containerStyle={{paddingTop:0,paddingLeft:0,paddingRight:0}}
      />
      
    );
  }
}
