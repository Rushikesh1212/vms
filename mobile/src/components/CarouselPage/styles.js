import { StyleSheet, Dimensions,Platform } from 'react-native';
import { colors } from '../../config/styles.js';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
const window = Dimensions.get('window');

export default StyleSheet.create({

  header:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding:10,
        height: 60,
         backgroundColor: 'transparent',
        paddingTop:50,
    },
  container:{
    // backgroundColor: '#0ff',
    // alignItems:'center',
    minHeight:window.height- 25
    // minHeight:'100%',
    // flex:1,
  },
  container1: {
    // flex: 1,
    flexDirection:'row', //add this
    // backgroundColor:'#131420',
    alignItems: 'center',
    color:'#333',
    justifyContent: 'center',
  },

  carouselImage:{
    // backgroundColor:'#aaa',
    height:275,
    width:'100%',
      },
  loginTitleTxt:{
    fontSize: 25,
    color:'#333',
    fontFamily:"Montserrat-Bold",
  },
  formContainer:{
    alignItems:'center',
    // paddingHorizontal:'5%'
  },
  formInputView: {
    width:'86.6%',
  },
  inputText:{
    borderWidth:1,
    borderColor:'#aaa',
    height: 40,
    paddingLeft:10,
    textAlignVertical:'center',
    paddingTop:0,
    paddingBottom:0,
  },
  labelText:{
    top:6,
    paddingLeft:2,
  },
  button:{
    width:'85%',
    backgroundColor: colors.button,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:50
  },
    button1:{
    width:'100%',
    backgroundColor: colors.button1,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:50
  },
   button2:{
    width:'100%',
    backgroundColor: colors.button2,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:50
  },
  buttonSignUp:{
     width:'75%',
    backgroundColor: colors.buttonSignUp,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:50,
    borderWidth:1,
    borderColor:'#333'

  },
  marginTB:{
    marginVertical: 15,
    // marginBottom: 20, 
  },
  buttonSignInText:{
    color: colors.buttonText1,
    borderRadius:50,
    fontSize:13,
    fontFamily:"Montserrat-Regular",
  },
  buttonFGText:{
    color: colors.buttonText,
    borderRadius:50,
    paddingLeft:10,
    fontSize:13,
    fontFamily:"Montserrat-Regular",
  },
  buttonGFText:{
    color: colors.buttonText,
    borderRadius:50,
    paddingRight:20,
    fontSize:13,
    fontFamily:"Montserrat-Regular",
  },
  iconStyles:{
    paddingRight:10
  },
  iconStyles1:{
     paddingRight:20
   },
  linkWrap:{
    width: '100%',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  linkLightText:{
    color: colors.textLight,
    // fontSize: 15,
    fontFamily:"Montserrat-Regular",
  },
  linkText:{
    color: colors.textLight,
    // fontSize: 15,
    fontFamily:"Montserrat-SemiBold",
    // textDecorationLine: 'underline'
  },
  bgImage:{
    // flex:1,
    width:'100%',
    height:'100%',
    alignItems:'center',
    // padding:10,
    // opacity:1,
    // borderBottomWidth:2,
    // borderColor:'#fff'
  },
  outerWrapper:{
    // width:'100%',
    // padding:'6%',
    alignItems:'center',
    // height: 60,
    marginTop:((Platform.OS === 'ios') ? 50 : 0),
        backgroundColor: '#0ff',
        // paddingTop: getStatusBarHeight()
  },
  formWrapper:{
    // width:'100%',
    // backgroundColor:'#f0f',
    // padding:10,
    paddingHorizontal:'5%',
    paddingTop:60,
    paddingBottom : 20,
    alignItems:'center',

    // borderWidth: 1,
    // borderColor:'#ccc',
    shadowOpacity: 0.8,
    shadowColor: 'grey',
    shadowRadius: 5,
    shadowOffset: { height: 2, width: 0 },
  },

  logoRoundWrapper :{
    height:80,
    width:80,
    borderRadius:80/2,
    backgroundColor:'#fff',
    position:'absolute',
    zIndex:1,
    borderColor: colors.primary,
    borderWidth:10,
    padding:6,
  },

  inputWrapper : {
    width:'100%',
    borderColor:'#666',
    borderWidth:1,
    flexDirection:'row',
    borderRadius: 50,
  },

  marginBottom30: {
    marginBottom: 30,
  },

  marginTop30:{
    marginTop: 30
  },

  marginBottom20:{
    marginBottom: 20
  },

  inputImgWrapper : {
    width:'12%',
    justifyContent:'center',
    alignItems:'center',
    borderRightWidth:1,
    borderColor: colors.textLight,
    marginVertical:5
  },

  inputTextWrapper : {
    width:'88%'
  },

  /*inputText:{
    fontFamily:"Montserrat-Regular",

  }*/

  buttonContainer:{
    width:'75%',
    // marginTop:25,
    ...Platform.select({
      ios:{
        justifyContent:'center',
        marginLeft: 40

      },
      android : {
        alignItems:'center'
      }
    })
  },
  button1Container:{
    width:'48%',
    // marginTop:25,
    ...Platform.select({
      ios:{
        justifyContent:'center',
        // marginLeft: 40

      },
      android : {
        alignItems:'center'
      }
    })
  },
  textContainer:{
    height:'auto',
    paddingLeft:10
  },
  textInputContainer:{
    backgroundColor:'transparent',
    paddingLeft:5,
    // fontFamily:"Montserrat-Regular",
    borderBottomColor: "transparent"
  },
  textTitle:{
    fontFamily:"Montserrat-Regular",
    top:0
  },
  textStyle:{
    fontFamily:"Montserrat-Regular",
    backgroundColor:'transparent',
    paddingTop:0,

    marginTop:-6
  },
  textLabel:{
    backgroundColor:'#fff',
    fontFamily:"Montserrat-Regular",
    top:-10,

    left:10,
    paddingHorizontal:2
  },
  errorWrapper:{
    width:'100%',
    marginBottom:-15
  },
  errorText:{
    color:'#dc3545',
    fontSize:12,
    marginTop:3,
    paddingLeft:25,
    fontFamily:'Montserrat-Regular'
  },
  eyeWrapper:{
    width:'35%',
    justifyContent:'center',
    alignItems:'center',
  },
  inputText2Wrapper:{
    width:'74%',
    justifyContent:'center'
  },
  containerViews:{
    // flex: 1,
    marginTop:25,
    // marginBottom:25,
        // backgroundColor: '#aaa',/
        // justifyContent: 'center'
  }

});
