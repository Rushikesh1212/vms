import { StyleSheet, Dimensions,Platform } from 'react-native';
import { colors } from '../../config/styles.js';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
const window = Dimensions.get('window');


export default StyleSheet.create({

  container:{
    // backgroundColor: '#fff',
    width: null, height: null,
    // minHeight:window.height- 25,
  },
  title:{
  fontFamily:"Montserrat-Bold",fontSize:15,color:'#111',textAlign:'center',paddingTop:20
  },
  rupess:{
    fontFamily:"Montserrat-SemiBold",fontSize:17,color:'#fff',
  },
  planDetails:{
    fontFamily:"Montserrat-SemiBold",fontSize:16,color:'#fff',
  },
  bgImage:{
    borderRadius:50
  },
  deatilsTxt:{
    fontFamily:"Montserrat-Bold",fontSize:18,color:'#333',
  },
   bgImages:{
    width:'100%',
    // height:'100%',
    // minHeight:window.height- 25,
    alignItems:'center',
    justifyContent:'center',
      // paddingHorizontal:20,
    // backgroundColor:'#fff'
  },
  bgContainer: { 
    flex:1, 
    width: null, 
    height: null,
    justifyContent:'center',
    // alignItems:'center'
  } ,
  outerWrapper:{
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    // paddingTop:"45%",
    // borderRadius:30,
    paddingHorizontal:30,
    backgroundColor:'#ff0'
    // flex:1,
  
  },
  outerWrapper2:{
    height:'100%',
    backgroundColor:'#ff0',
    justifyContent:'center'
  },
  detailsBlock:{
    borderRadius:30,
    // backgroundColor:'#fff',
    marginHorizontal:'5%',
    paddingTop: '4%',
  },
  packagetitle:{
    fontFamily:"Montserrat-Bold",
    fontSize:25,
    color:'#333',
    textAlign:'center',
    // paddingTop:10
  },
  package2title:{
    fontFamily:"Montserrat-SemiBold",
    fontSize:18,
    color:'#333',
    textAlign:'center',
    marginBottom: '5%'
    // marginVertical:3
  },
  detailsTextWrap:{
    paddingHorizontal:'5%',
    paddingTop:'3%',
    backgroundColor:'#fff',
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  },
  textPara:{
    fontFamily:"Montserrat-Regular",
    fontSize:14,
    color:'#666',
    textAlign:'center',
    marginBottom:'3%'
    // marginVertical:3
  },
    footer:{
    // flex:1,
    width:'100%',
    position:'absolute',
    bottom:0,
    height:0,
    flexDirection:'row',
    backgroundColor:'#fff',
    paddingHorizontal:0,
    borderTopWidth:1,
    borderTopColor:'#eee',
    justifyContent:'center'
  },
  selectPlan:{
    fontFamily:"Montserrat-SemiBold",
    fontSize:18,
    color:'#fff',
    textAlign:'center'
  },
   buttonSignUp:{
     width:'100%',
    backgroundColor: colors.button,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    borderWidth:1,
    borderColor:'#0275D8'

  },
  buttonContainer:{
    width:'80%',
    alignSelf:'center'
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
    color: colors.buttonText,
    borderRadius:50,
    fontSize:15,
    fontFamily:"Montserrat-SemiBold",
  },
  statText:{
    fontSize:18,
    fontFamily:"Montserrat-Regular"
  },
  head: { 
    height: 40, 
    backgroundColor: '#f1f8ff',
    paddingHorizontal:0
  },
  text:{
    fontFamily:"Montserrat-SemiBold",
    alignSelf:'center',
    paddingVertical:10
  }
  
});
