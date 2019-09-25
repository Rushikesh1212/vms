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
  Image,
  AsyncStorage
} from 'react-native';
import { Icon, Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { Dropdown } from 'react-native-material-dropdown';
import styles from './styles.js';
import {colors} from '../../config/styles.js';


export default  class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state={
      fullName:''
    };
    this._retrieveData()
  }
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('userName');
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
       var tokenremove = AsyncStorage.removeItem("token");
    console.log("tokenremove==>",tokenremove);
    this.props.navigation.navigate("LogIn");
    this.props.navigation.closeDrawer();

  }
  showUser(){
    var name  = "";
    AsyncStorage.multiGet(['token','user_id','userName'])
      .then((data)=>{
        token = data[0][1]
        user_id = data[1][1]
        userName = data[2][1]
        this.setState({fullName:userName})
      })
    return this.state.fullName
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
                  {this.showUser()}
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