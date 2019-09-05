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
  fontFamily:"Montserrat-Bold",fontSize:16,color:'#111',textAlign:'left',paddingTop:20
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
    userTitleTxt:{
    fontSize: 22,
    color:'#333',
    fontFamily:"Montserrat-Bold",
  },
  detailText:{
    fontSize:15,
    color: '#333',
    flex: 0.7,
    fontFamily:'Montserrat-SemiBold'
  },
    container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    fontFamily:'Montserrat-SemiBold'

    // paddingTop: Constants.statusBarHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    fontFamily:'Montserrat-SemiBold'

  },
  MainContainer: {
    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  QR_text: {
    color: '#000',
    fontSize: 19,
    padding: 8,
    marginTop: 12
  },
  button: {
    backgroundColor: '#2979FF',
    alignItems: 'center',
    padding: 12,
    width: 300,
    marginTop: 14
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
