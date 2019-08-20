import React from "react";
// import Meteor, { createContainer } from "react-native-meteor";
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image
} from "react-native";
import { Header, Icon, SearchBar  } from 'react-native-elements';
import ValidationComponent from "react-native-form-validator";

import styles from "./styles.js";
import {colors} from '../../config/styles.js';

import Search from 'react-native-search-box';


export default  class HeaderBar2 extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state={
      searchText: '',
    }
  }

  _goBack = () =>{
    this.props.goBack();
  }
  
  UNSAFE_componentWillMount() {
   
  }

    handleNavigation = (screen) =>{
    // this.props.navigate('Offers',{test:123})
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
  componentWillUnmount() {
  }

  _goBack = () => {
    this.props.goBack();
  };

  updateSearch = searchText => {
    this.setState({ searchText });
  };

  render() {
    return (
      <Header
        placement="left"

        leftComponent={
          <View style={{flexDirection:'row',justifyContent:'space-between',}}>

            <TouchableOpacity  onPress={this.props.toggle()} >
              <Icon size={29} name='menu' type='material-community' color='#333' />
            </TouchableOpacity>
          </View>
        }

        // centerComponent={{ text: this.props.title, style:styles.title }}
        centerComponent={
         <SearchBar
            placeholder         = 'Search a Coffic near you'
            containerStyle      = {styles.searchContainer}
            inputContainerStyle = {styles.searchInputContainer}
            inputStyle          = {styles.searchInput}
            onChangeText        = {this.updateSearch}
            value               = {this.state.searchText}
          />
        }
      
        rightComponent={
          <View style={{flexDirection:'row',justifyContent:'space-between',}}>

            <TouchableOpacity  style={styles.headerrightside} onPress={()=> this.props.navigate('WorkspaceList')} >
              <Icon name="list-alt" type="font-awesome" size={25}  color="#333"/>
             
            </TouchableOpacity>
            
       

          </View>

        }
        outerContainerStyles = {{height:0,backgroundColor:'transparent'}}
        containerStyle={styles.container}
        backgroundColor={'transparent'}
      />
    );
  }
}
// export default createContainer(props => {
//   // var businessId  = Meteor.user().profile.activeServiceId;
//   // const handle    = Meteor.subscribe('userNotifForBiz',businessId);
//   // const notifData = Meteor.collection('userNotification').find({businessId,read:{$ne:true}}) || [];

//   var ownerId = Meteor.userId();
//   // console.log("ownerId = ",ownerId);
//   const bizHandle = Meteor.subscribe('businessDetailByUserId',ownerId);   
//   const loading   = !bizHandle.ready();
//   const businessData = Meteor.collection('businessDetail').findOne({'businessOwnerId':ownerId});
//   // console.log("businessData = ",businessData);

//   const industryHandle = Meteor.subscribe('industryDetails');
//   var industryDetails  = Meteor.collection('industryDetails').find({},{sort:{'industryType':1}})|| [];
//   var industryData = [];
//   industryData = industryDetails.map((obj,index)=>{
//     return ({'value':obj.industryType});
//   });

//   return {
//     loading,
//     businessData,
//     industryData,
//     industryDetails,

//     count       : 0,
//     notification: [],
//   };

// }, NotificationHeader);
