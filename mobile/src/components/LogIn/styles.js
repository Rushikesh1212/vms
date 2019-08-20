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
    alignItems:'center',
    // minHeight:'100%',
       minHeight:window.height-25,
       // height:'auto',
    // flex:1,
  },
  /*containerView:{
  	backgroundColor: '#0ff',
    alignItems:'center',
    justifyContent:'center',
    height:100
  },*/
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
    top:5,
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
    borderRadius:50,
    fontFamily:"Montserrat-Regular",
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
    width:'100%',
    // padding:'6%',
    alignItems:'center',
    // height: 60,
    marginTop:((Platform.OS === 'ios') ? 50 : 0),
        backgroundColor: 'transparent',
        // paddingTop: getStatusBarHeight()
  },
  formWrapper:{
    width:'100%',
    // backgroundColor:'#fff',
    // padding:10,
    paddingHorizontal:12,
    paddingTop: 10,
    paddingBottom : 10,

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
    width:'70%',
    marginTop:15,
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
    top:0, 
    fontSize:12
  },
  textStyle:{
    fontFamily:"Montserrat-Regular",
    backgroundColor:'transparent',
    paddingTop:0,
    marginTop:-6,
    fontSize:14
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
    fontSize:12,
    marginTop:3,
    paddingLeft:25,
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

});
