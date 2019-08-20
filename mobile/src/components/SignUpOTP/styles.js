import { StyleSheet, Dimensions,Platform } from 'react-native';
import {colors} from '../../config/styles.js';
const window = Dimensions.get('window');

export default StyleSheet.create({

  container:{
    // backgroundColor: '#0ff',
    alignItems:'center',
    minHeight:'100%',
    // minHeight:'100%',
    // flex:1,
  },
   buttonSignUp:{
     width:'100%',
    backgroundColor: colors.button,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:50,
    borderWidth:1,
    borderColor:'#0275D8'

  },
    buttonContainer:{
    width:'100%',
    // backgroundColor:'#f0f',
    // marginTop:25,
    // ...Platform.select({
    //   ios:{
    //     justifyContent:'center',
    //     // marginLeft: 40

    //   },
    //   android : {
    //     alignItems:'center'
    //   }
    // }),
    // marginVertical: 10
  },
     buttonText:{
    color: '#000',
    backgroundColor:"#f0f",
    borderRadius:50,
    fontSize:15,
    fontFamily:"Montserrat-SemiBold",
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
    width:'100%',
    paddingHorizontal:15
  },
    loginTitleTxt:{
    fontSize: 25,
    color:'#333',
    fontFamily:"Montserrat-Bold",
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
    paddingTop: 35,
    paddingBottom : 15,
    // alignItems:'center',

    // borderWidth: 1,
    // borderColor:'#ccc',
    shadowOpacity: 0.8,
    shadowColor: 'grey',
    shadowRadius: 5,
    shadowOffset: { height: 2, width: 0 },
  },
  otpWrap:{
    marginBottom:30,
    paddingHorizontal:28
    // alignItems:'center',
    // justifyContent:'center'
  },
  otpText:{
    fontFamily:"Montserrat-Regular",
    fontSize: 15
  },
  otpInputWrap:{
    backgroundColor:'transparent',
    width:'100%',
    flexDirection:'row',
     // paddingHorizontal:10,
    // justifyContent:'center',
    // alignItems: 'center',
    paddingTop:10,
  },
  /*otpInput:{
    height: 40,
    width:40,
    fontFamily:"Montserrat-Regular",
    borderWidth:1,
    borderColor:colors.border,
    borderRadius: 3,
    marginRight: 5,
    textAlign : 'center',
    justifyContent:'center'

  },*/

  otpInput:{
    width:40,
    height:40,
    borderWidth:1,
    borderColor:colors.border,
    borderRadius: 3,
    marginRight: 5,
  },



  // buttonContainer:{
  //   // width:'100%',
    
  //   width:((Platform.OS === 'ios') ? '100%' : '100%'),
  //   marginLeft: ((Platform.OS === 'ios') ? 40 : 0),
  //   justifyContent: 'center',
  //   alignItems:'center',
  //   marginBottom: 10
  // },

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
    // paddingLeft:4
  },
  textInputContainer:{
    backgroundColor:'transparent',
    // left:5,
    // fontFamily:"Montserrat-Regular",
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
    // left:-4,
    // paddingHorizontal:2
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
