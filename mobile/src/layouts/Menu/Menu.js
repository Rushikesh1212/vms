import React from 'react';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image
} from 'react-native';
import { Icon, Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { Dropdown } from 'react-native-material-dropdown';
// import Meteor, { createContainer } from "react-native-meteor";
// import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
// import ImagePicker from 'react-native-image-picker';
// import { RNS3 } from 'react-native-aws3';

import styles from './styles.js';
import {colors} from '../../config/styles.js';


export default  class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state={
    };

  }
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('userId');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
      console.log('error while retrieving data',error)
    }
  };
  handleNavigation = (screen) =>{
    this.props.navigation.navigate(screen);
    this.props.navigation.closeDrawer();
  }
  handleLogout = () =>{
    this.props.navigation.navigate("LogIn");
    this.props.navigation.closeDrawer();
  }
  render(){

    return (
      <ScrollView contentContainerStyle={[styles.container]} scrollsToTop={false}>
        {/* <LinearGradient colors={['#f7ac57','#f7ac57' ,'#f7ac57','#f7ac57', '#f7ac57','#fefaec']} style={styles.linearGradient}>*/}
            <View style={{flexDirection:'row',paddingHorizontal:25,marginTop:25,}}>
              
                <View style={{flex:0.5,}}>
              <TouchableOpacity onPress={this.editProfileImage}>
                <Avatar
                  overlayContainerStyle={{}}
                  width={90}
                  height={90}
                  rounded
                  source={require('../../images/userIcon.png')}                 
                  activeOpacity={0.7}
                />
              </TouchableOpacity>
                </View>
              
              <View style={{flex:0.7,alignItem:'flex-start',alignSelf:'flex-start',marginTop:5}}>
                <Text style={{color:'#333',fontFamily:"Montserrat-SemiBold", fontSize:17,}}>
                  Paul Walker
                </Text>

                <View style={{flex:0.5, marginRight:10}}>
                  
                 <View style={styles.formInputView}>
              <View style={[styles.inputWrapper]}>
                  <View style={styles.inputTextWrapper}>                      
                </View>
              </View>
            </View>
                  
                </View>
              </View>
             

            </View>
        {/*</LinearGradient>*/}
          <View style={styles.menuWrapper}>
            <TouchableOpacity onPress={()=>this.handleNavigation('WorkspaceMap')}>
              <View style={styles.menu}>
                <Icon 
                  size={22} 
                  name='home' 
                  type='font-awesome' 
                  color='#666' 
                  containerStyle={styles.iconContainer}
                />
                <Text style={styles.menuText}>
                  Home
                </Text>
              </View>
            </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.handleNavigation('UserProfile')}>
              <View style={styles.menu}>
                <Icon 
                  size={19} 
                  name='user-circle-o' 
                  type='font-awesome' 
                  color='#666' 
                  containerStyle={styles.iconContainer}
                />
                <Text style={styles.menuText}>
                  User Profile
                </Text>
              </View>
            </TouchableOpacity>

             <TouchableOpacity onPress={()=> this.handleNavigation('Notification')} >
              <View style={styles.menu}>
                <Icon 
                  size={18} 
                  name='bell' 
                  type='entypo' 
                  color='#666' 
                  containerStyle={styles.iconContainer}
                />
                <Text style={styles.menuText}>
                  Notifications
                </Text>
              </View>
            </TouchableOpacity>       


            <TouchableOpacity onPress={this.handleLogout.bind(this)}>
              <View style={styles.menu}>
                <Icon 
                  size={23} 
                  name='power' 
                  type='material-community' 
                  color='#666' 
                  containerStyle={styles.iconContainer}
                />
                <Text style={styles.menuText}>
                  Logout
                </Text>
              </View>
            </TouchableOpacity>

          </View>
      </ScrollView>
    );
  }
}

// export default createContainer (props => {
//   var ownerId = Meteor.userId();
//   const bizHandle = Meteor.subscribe('businessDetailByUserId',ownerId);   
//   const loading   = !bizHandle.ready();
//   const businessData = Meteor.collection('businessDetail').findOne({'businessOwnerId':ownerId});

//   const s3Handle    = Meteor.subscribe('s3Details');   
//   const loading2    = !s3Handle.ready();
//   var s3Data        = Meteor.collection("projectSettings").findOne({'type':'S3'});
//   // console.log("container s3Data = ",s3Data);
//   return {
//     loading,
//     businessData,
//     s3Data
//   };
// }, Menu);

