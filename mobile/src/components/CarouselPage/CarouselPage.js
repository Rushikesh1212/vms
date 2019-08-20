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
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager} from "react-native-fbsdk";

const window = Dimensions.get('window');

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;
 
const images = [
  {
    imageSource : require("../../images/illustration1.png"),
    title: "Find your space"
  },
  {
    imageSource : require("../../images/illustration2.png"),
    title: "Get to work"
  },
  {
    imageSource : require("../../images/illustration3.png"),
    title: "Get inspired"
  }
];

export default class CarouselPage extends ValidationComponent{
  constructor(props){
    super(props);
    this.state={
      inputFocusColor : colors.textLight,
      email : '',
      password : '',
      showPassword: false,
      btnLoading: false,
      carouselItems: [
            {
                title:"Find your space"
            },
            {
                title:"Item 2"
            },
            {
                title:"Item 3"
            },
            {
                title:"Item 4"
            },
          ]
    };
  }

  componentDidMount() {
    /*GoogleSignin.configure({
        webClientId: "247068317768-3dimed9dbm7iq92rj5ddngpilelqnrd9.apps.googleusercontent.com",
        forceConsentPrompt: true, // if you want to show the authorization prompt at each login
        scopes:[
          "https://www.googleapis.com/auth/user.phonenumbers.read"
        ]
    });*/
    GoogleSignin.configure({
        webClientId: "299712674471-7s1miev0re0vhlcjc7m4nnhbr33lob38.apps.googleusercontent.com",
        forceConsentPrompt: true, // if you want to show the authorization prompt at each login
        scopes:[
          "https://www.googleapis.com/auth/user.phonenumbers.read"
        ]
    });
  }


  googleSignInHandler = () => {

        GoogleSignin.hasPlayServices()
        .then(res => {
            GoogleSignin.signIn()
            .then(res => {
                console.log("res = ",res);
            })
            .catch(err => {
                console.log("err = ",err);
                console.log("err.code = ",err.code);
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

  signIn = async () => {
    try {

      const isSignedIn = await GoogleSignin.isSignedIn();
      if(isSignedIn){
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();  
        // const currentUser = await GoogleSignin.getCurrentUser();
        // console.log("currentUser = ",currentUser);
      }
      
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("userInfo = ",userInfo);
      // this.setState({ userInfo });
    } catch (error) {
      console.log("error = ",error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  handleFbSignIn = ()=>{
    this.customFacebookLogout();
    LoginManager.logInWithPermissions(["public_profile","email"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log("result = ",result);
          console.log(
            "Login success with permissions: " +
              result.grantedPermissions.toString()
          );

          // let req = new GraphRequest('/me', {
          //     httpMethod: 'GET',
          //     version: 'v2.5',
          //     parameters: {
          //         'fields': {
          //             'string' : 'email,name,friends'
          //         }
          //     }
          // }, (err, res) => {
          //     console.log("err = ",err);
          //     console.log("res = ",res);
          // });

          AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log("data => ",data.accessToken.toString())
                    const { accessToken } = data;
                    console.log("accessToken = ",accessToken);
                    fetch('https://graph.facebook.com/v2.5/me?fields=first_name,last_name,picture,email,name,friends&access_token=' + accessToken)
                      .then((response) => response.json())
                      .then((json) => {
                        // Some user object has been set up somewhere, build that user here
                        console.log("json = ",json);
                        // user.name = json.name
                        // user.id = json.id
                        // user.user_friends = json.friends
                        // user.email = json.email
                        // user.username = json.name
                        // user.loading = false
                        // user.loggedIn = true
                        // user.avatar = setAvatar(json.id)      
                      })
                      .catch(() => {
                        reject('ERROR GETTING DATA FROM FACEBOOK')
                      })
                  }
                )
        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    );
  }

  customFacebookLogout = () => {
    var current_access_token = '';
    AccessToken.getCurrentAccessToken().then((data) => {
      current_access_token = data.accessToken.toString();
    }).then(() => {
      let logout =
      new GraphRequest(
        "me/permissions/",
        {
            accessToken: current_access_token,
            httpMethod: 'DELETE'
        },
        (error, result) => {
            if (error) {
                console.log('Error fetching data: ' + error.toString());
            } else {
                LoginManager.logOut();
            }
        });
      new GraphRequestManager().addRequest(logout).start();
    })
    .catch(error => {
      console.log(error)
    });      
  }

  validInput = () => {
    const {
      email,
      password,
    } = this.state;
    let valid = true;

    this.validate({
      
      email: { 
        required: true,
        email: true,
      },
      password: { 
        required: true, 
        minlength: 5 
      },
      
    });

    if (this.isFieldInError("email")) {
      this.setState({ emailError: this.getErrorsInField("email") });
      valid = false;
    } else {
      this.setState({ emailError: "" });
    }
    if (this.isFieldInError("password")) {
      this.setState({ passwordError: this.getErrorsInField("password") });
      valid = false;
    } else {
      this.setState({ passwordError: "" });
    }

    return valid;
  };

  handleSignIn = ()=>{
    let {email,password} = this.state;
    email = email.toLowerCase();

    if(this.validInput()){
      console.log("inside handlesignin");
      this.setState({btnLoading:true});

      Meteor.call('checkBlockedUser',email,(err,res)=>{
        if(err){
          Alert.alert('','Something went wrong');
          this.setState({btnLoading:false});
        }else{
          if(res=='Active'){
            Meteor.loginWithPassword(email, password, (error)=> {
              if (error) {
                Alert.alert('','Email or password Incorrect');
              } else {
                // this.props.navigation.navigate('Home');
              }
            });
          } else if(res=='Blocked'){
            Alert.alert('','User Account has been blocked');
          } else if(res=='notfound'){
            Alert.alert('','User not found');
          }

          this.setState({btnLoading:false});
          
        }
      });
      
    }
  }

  displayValidationError = (errorField) =>{
    let error = null;
    if(this.state[errorField]){
      error = <View style={styles.errorWrapper}>
                <Text style={styles.errorText}>{this.state[errorField][0]}</Text>
              </View> ;
    }
    return error;
  }

  handleShowPassword = ()=>{
    this.setState({showPassword:!this.state.showPassword});
  }
  
/*
_renderItem(item,index){
    return (
        <View style={{justifyContent:'center',alignItems:'center',}}> 
            <Image
                resizeMode="cover"
                style={styles.carouselImage}
                source={require('../../images/Terry-01.jpg' )}
                />
            <Text style={{color:'#333',fontFamily:"Montserrat-SemiBold",fontSize:18}} >Find your space</Text>
        </View>
    )
}*/

 renderPage(image, index) {
        return (
            <View key={index}>
                <ImageBackground 
                  style={{ width:230, height: 230,alignItems:"center",alignSelf:"center",marginBottom:"25%"}} 
                  // source={require('../../images/Image-Crop.png' )}
                  source={image.imageSource}
                  resizeMode={"contain"}
                >
                  <View 
                    style={{flex:1,width:'100%',position:"absolute",top:"100%",}}
                  >
                    <Text style={{color:'#333',textAlign:'center',fontFamily:"Montserrat-SemiBold",fontSize:20,marginTop:5}}> 
                      {image.title}
                    </Text>
                  </View>
                </ImageBackground>
            </View>
        );
    }

render(){
    const messages = {
        en: {
            email: "Please enter a valid Email / Mobile number.",
            numbers: 'Please enter a valid Email / Mobile number.',
            required: '\nThis Field is mandatory.',
            minlength: '\nPassword length must be greater than {1}.',
            maxlength: '\nPassword length must be lower than {1}.'
        }
    };
    const { navigate,dispatch } = this.props.navigation;
    return (

          <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled" >
               <View style={{flex:1,marginTop:"5%"}}>
                    
                    <View>
        {/*        <SafeAreaView style={styles.container1}>
                    <View>
                        <Carousel
                            ref={ref => this.carousel = ref}
                            data={this.state.carouselItems}
                            sliderWidth={250}
                            itemWidth={250}
                            renderItem={this._renderItem}
                            onSnapToItem = { index => this.setState({activeIndex:index}) }
                        />
                    </View>
                </SafeAreaView>*/}
                         <View style={styles.containerViews}>
                              <Carousel
                                   autoplay
                                   autoplayTimeout={5000}
                                   loop
                                   index={0}
                                   pageSize={BannerWidth}
                               >
                              {images.map((image, index) => this.renderPage(image, index))}
                              </Carousel>
                         </View>
                    </View>
     
                    <View style={styles.formWrapper}>
                         <View style={[styles.formInputView,styles.marginBottom30]}>
                              <Button
                                   icon={
                                        <Icon
                                            name="facebook-f"
                                            type="font-awesome"
                                            size={15}
                                            color="white"
                                            iconStyle ={styles.iconStyles}
                                        />
                                   }
                                   iconLeft
                                   title="Continue with Facebook"
                                   buttonStyle     = {styles.button2}
                                   titleStyle      = {styles.buttonFGText}
                                   containerStyle  = {styles.buttonContainer1}
                                   onPress = {()=>this.handleFbSignIn()}
                              />
                         </View>
                         <View style={[styles.formInputView,styles.marginBottom30]}>
                              <Button
                                   icon={
                                        <Icon
                                             name="google"
                                             type="font-awesome"
                                             size={15}
                                             color="white"
                                             iconStyle ={styles.iconStyles1}
                                        />
                                   }
                                   iconLeft
                                   title="Continue with Google"
                                   titleStyle      = {styles.buttonGFText}
                                   buttonStyle     = {styles.button1}
                                   containerStyle  = {styles.buttonContainer1}
                                   onPress={()=>this.signIn()}
                              />
                        </View>

              {/*this.state.btnLoading
                ?
                  <Button
                    titleStyle      = {styles.buttonText}
                    title           = "Processing"
                    loading
                    buttonStyle     = {styles.button}
                    containerStyle  = {styles.buttonContainer}
                  />
                :
                  <Button
                    onPress         = {this.handleSignIn}
                    titleStyle      = {styles.buttonText}
                    title           = "Log In"
                    buttonStyle     = {styles.button}
                    containerStyle  = {styles.buttonContainer}
                  />
                */}
                        <View style={[styles.formInputView,styles.marginBottom30],{flexDirection:'row',}}>
                            <Button
                                onPress         =  {() => this.props.navigation.navigate("SignUp")}
                                titleStyle      = {styles.buttonSignInText}
                                title           = "Sign Up"
                                buttonStyle     = {styles.buttonSignUp}
                                containerStyle  = {styles.button1Container}
                            />
                            <Button
                                onPress         = {() => this.props.navigation.navigate("LogIn")}
                                titleStyle      = {styles.buttonSignInText}
                                title           = "Sign In"
                                buttonStyle     = {styles.buttonSignUp}
                                containerStyle  = {styles.button1Container}
                            />
                        </View>
              {/*  <Button
                  titleStyle      = {styles.buttonText}
                  title           = "Processing"
                  loading
                  buttonStyle     = {styles.button}
                  containerStyle  = {styles.buttonContainer}
                />*/}
              </View>
        </View>
      </ScrollView>

    );
    
  }
}

CarouselPage.defaultProps = {
  messages: {
    en: {
      numbers: 'This field must be a number.',
      email: 'Enter a valid email address',
      required: 'This field is required.',
      letters: 'It should only contain letters.',
      mobileNo: 'Enter a valid mobile number.',
      lettersOrEmpty: 'It should only contain letters.',
      minlength: 'Length should be greater than {1}',
    }
  },

  rules: {
    numbers: /^(([0-9]*)|(([0-9]*)\.([0-9]*)))$/,
    email: /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$|^$/,
    required: /\S+/,
    letters: /^[a-zA-Z ]+$/,
    lettersOrEmpty: /^[a-zA-Z ]+$|^$/,
    mobileNo: /^\d{5}([- ]*)\d{6}$|^(\+91?)?[0]?(91)?[789]\d{9}$|^$/,
    minlength(length, value) {
      if (length === void(0)) {
        throw 'ERROR: It is not a valid length, checkout your minlength settings.';
      } else if(value.length > length) {
        return true;
      }
      return false;
    },
  },
}
