import React from "react";
// import Meteor, { createContainer } from "react-native-meteor";
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image
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

  render() {
    const { headerTitle } = this.props;
    return (
      <Header 
        backgroundColor={'#337ab7'}
        placement="left"
        leftContainerStyle={{backgroundColor:'transparent',paddingHorizontal:15}}
        centerContainerStyle={{backgroundColor:'#337ab7',paddingLeft:0,paddingRight:0,paddingTop:0}}
        rightContainerStyle={{backgroundColor:'transparent',paddingHorizontal:15}}
        leftComponent={
         <View style={{justifyContent:'center',alignItems:'center',marginTop:5,alignSelf:'center'}}>
            <TouchableOpacity onPress={()=>this.props.navigattion.openDrawer()}>
              <Icon2 size={25} name='dots-three-vertical' type='entypo' color='#111' />
            </TouchableOpacity>
          </View>
        }
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
        // rightComponent={
        //  <View style={{justifyContent:'center',alignItems:'center',marginTop:10,alignSelf:'center'}}>
        //     <TouchableOpacity onPress={()=>this.props.navigattion.openDrawer()}>
        //       <Icon2 size={28} name='dots-three-vertical' type='entypo' color='#333' />
        //     </TouchableOpacity>
        //   </View>
        // }
        containerStyle={{paddingTop:0,paddingLeft:0,paddingRight:0}}
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

// <Header
//         placement="left"

//         leftComponent={
//           <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>

//             <TouchableOpacity  onPress={()=>this.props.navigattion.openDrawer()} >
//                           <Icon2 size={28} name='menu' type='material-community' color='#333' />
//                         </TouchableOpacity>
//           </View>
//         }

//         // centerComponent={{ text: this.props.title, style:styles.title }}
//         centerComponent={
//           <SearchBar
//             placeholder         = 'Search a Coffic near you'
//             containerStyle      = {styles.searchContainer}
//             inputContainerStyle = {styles.searchInputContainer}
//             inputStyle          = {styles.searchInput}
//             onChangeText        = {this.updateSearch}
//             value               = {this.state.searchText}
//           />
//         }
      
//         rightComponent={
//           <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15,marginRight:7}}>

//             <TouchableOpacity onPress={()=>this.props.navigate('WorkspaceMap')} style={styles.headerrightside}  >
//               <Icon name="md-globe" size={29}  color="#333"/>
             
//             </TouchableOpacity>
            
       

//           </View>

//         }
//         outerContainerStyles = {{height:0,backgroundColor:'#fff'}}
//         containerStyle={styles.container}
//         backgroundColor={'#fff'}
//       />