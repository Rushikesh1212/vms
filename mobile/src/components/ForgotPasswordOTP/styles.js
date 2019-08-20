import { StyleSheet, Dimensions,Platform } from 'react-native';
import {colors} from '../../config/styles.js';
const window = Dimensions.get('window');

export default StyleSheet.create({

  container:{
    // backgroundColor: '#0ff',
    // alignItems:'center',
    minHeight:'100%',
    // minHeight:'100%',
    // flex:1,
  },
  /*containerView:{
  	backgroundColor: '#0ff',
    alignItems:'center',
    justifyContent:'center',
    height:100
  },*/
  formContainer:{
    alignItems:'center',
    // paddingHorizontal:'10%'
  },
  formInputView: {
    width:'85%',
    paddingHorizontal:0
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
  marginTB:{
    marginVertical: 10,
    // marginBottom: 20, 
  },
  buttonText:{
    color: colors.buttonText,
    fontSize: 13,
    fontFamily:"Montserrat-Regular",
  },
  linkWrap:{
    width: '100%',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  linkText:{
    fontSize: 15,
    fontFamily:"Montserrat-Regular",
    // textDecorationLine: 'underline'
  },
  bgImage:{
    width:'100%',
    height:'100%',
    alignItems:'center',
  },
  outerWrapper:{
    width:'100%',
    // padding:'3%',
    alignItems:'center',
    marginTop:((Platform.OS === 'ios') ? 50 : 0)
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
  formWrapper:{
    width:'100%',
    backgroundColor:'#fff',
    // padding:10,
    // paddingHorizontal:'10%',
    paddingTop: 25,
    paddingBottom : 15,
    alignItems:'center',
    shadowOpacity: 0.8,
    shadowColor: 'grey',
    shadowRadius: 5,
    shadowOffset: { height: 2, width: 0 },
  },
  otpWrap:{
    marginBottom:30,
    // alignItems:'center',
    // paddingHorizontal:-15,

  },
  otpText:{
    fontFamily:"Montserrat-Regular",
    fontSize: 15
  },
  otpInputWrap:{
  // marginLeft:-25,
  flexDirection:'row',
  // justifyContent:'center',
  paddingTop:10
  },
  /*otpInput:{
    height: 40,
    width:40,
    fontFamily:"Montserrat-Regular",
    borderWidth:1,
    borderColor:colors.border,
    borderRadius: 3,
    marginRight: 10
  },*/
  otpInput:{
    width:40,
    height:40,
    borderWidth:1,
    borderColor:colors.border,
    borderRadius: 3,
    marginRight: 5,
  },
    loginTitleTxt:{
    fontSize: 25,
    color:'#333',
    fontFamily:"Montserrat-Bold",
  },
  buttonContainer:{
     width:'45%',
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
  marginBottom20:{
    marginBottom : 20
  },
  textContainer:{
    height:40,
  },
  textInputContainer:{
    backgroundColor:'transparent',
    borderBottomColor: "transparent",
  },
  textTitle:{
    fontFamily:"Montserrat-Regular",
    top:0
  },
  textStyle:{
    fontFamily:"Montserrat-Regular",
    backgroundColor:'transparent',
    paddingTop:0,
    marginTop:-6,
    textAlign:'center'
  },
  textLabel:{
    backgroundColor:'#fff',
    fontFamily:"Montserrat-Regular",
    top:-10,
    textAlign:'center'
  },
   button1Container:{
    width:'45%',
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
  buttonSignUp:{
     width:'85%',
    backgroundColor: colors.buttonSignUp,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:50,
    borderWidth:1,
    borderColor:'#333'

  },
   buttonSignInText:{
    color: colors.buttonText1,
    borderRadius:50,
    fontSize:13,
    fontFamily:"Montserrat-Regular",
  },
});
