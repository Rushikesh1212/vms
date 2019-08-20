import { StyleSheet, Dimensions, Platform } from 'react-native';
import {colors} from '../../config/styles.js';
const window = Dimensions.get('window');

export default StyleSheet.create({

  container:{
    // backgroundColor: '#0ff',
    // alignItems:'left',
    height:'100%',
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
    paddingHorizontal:'10%'
  },
  loginTitleTxt:{
    fontSize: 25,
    color:'#333',
    fontFamily:"Montserrat-Bold",
  },
  formInputView: {
    width:'85%',
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
    marginVertical: 15,
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
    // color: colors.textLight,
    fontSize: 15,
    fontFamily:"Montserrat-Regular",
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
    width:'100%',
    padding:'6%',
    alignItems:'center',
    marginTop:((Platform.OS === 'ios') ? 50 : 0)

  },
  formWrapper:{
    width:'100%',
    backgroundColor:'#fff',
    // padding:10,
    // paddingHorizontal:'10%',
    paddingTop: 25,
    paddingBottom : 20,
    alignItems:'center',
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
    borderRadius: 50
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
  // buttonContainer:{
  //   width:'100%',
  //   alignItems:'center',
  //   marginBottom: 10
  // },

  buttonContainer:{
    width:'45%',
    marginBottom: 10,

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
  textContainer:{
    height:"auto",
    paddingLeft:10
  },
  textInputContainer:{
    backgroundColor:'transparent',
    // left:5,
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
    top:-7,
    left:10,
    paddingHorizontal:2
  },
  errorWrapper:{
    width:'100%',
    marginBottom:-15
  },
  errorText:{
    color:'#dc3545',
    fontSize:13,
    fontFamily:'Montserrat-Regular'
  },
  successText:{
    color:'#28a745',
    fontSize:13,
    fontFamily:'Montserrat-Regular'
  },
  eyeWrapper:{
    width:'30%',
    justifyContent:'center',
    alignItems:'center',
  },
  inputText2Wrapper:{
    width:'74%',
    justifyContent:'center'
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
