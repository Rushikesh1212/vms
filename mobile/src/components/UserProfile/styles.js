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
  fontFamily:"Montserrat-Bold",fontSize:22,color:'#fff',textAlign:'left',paddingTop:20
  },
    successText:{
    color:'#28a745',
    fontSize:13,
    fontFamily:'Montserrat-Regular'
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
  formInputView: {
    width:'100%',
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
    width:'100%',
    backgroundColor: colors.button,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:50
  },
    textContainer:{
    height:'auto',
    paddingLeft:10
  },
  textInputContainer:{
    backgroundColor:'red',
    padding:15,
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
    backgroundColor:'yellow',
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
  inputImgWrapper : {
    width:'12%',
    justifyContent:'center',
    alignItems:'center',
    borderRightWidth:1,
    borderColor: colors.textLight,
    marginVertical:5
  },
  inputTextWrapper : {
    width:'88%',
    // backgroundColor:'#ccc'
  },
    inputWrapper : {
    width:'100%',
    borderColor:'#666',
    borderWidth:1,
    flexDirection:'row',
    borderRadius: 50,
  },
  buttonText:{
    color: colors.buttonText,
    fontSize: 13,
    fontFamily:"Montserrat-Regular",
  },
   buttonsss:{
    width:'85%',
    backgroundColor: colors.button,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:50
  },
  marginBottom30: {
    marginBottom: 30,
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
    newLabelText:{
    fontFamily: "Montserrat-Bold",
    flex:0.6,
    color:"#111",
    marginTop:10
  },
  newLabelRow:{
    flexDirection:'row',
    borderBottomWidth:1,
    borderColor:"#111",
    paddingVertical:8,
    paddingLeft:10
  },
  editableInput:{
    height: 35,
    borderColor:"#111",
    // backgroundColor:"yellow",
    borderBottomWidth: 2,
    paddingLeft:20,
    color:"#111",
    // flex:0.6
  },
  colorBall1:{
    height:20,
    width:20,
    borderRadius:10,
    marginLeft:5,
    backgroundColor:'#5cb85c'
  },
  colorBall2:{
    height:20,
    width:20,
    borderRadius:10,
    marginLeft:5,
    backgroundColor:'#337ab7'
  },
  colorBall3:{
    height:20,
    width:20,
    borderRadius:10,
    marginLeft:5,
    backgroundColor:'#5bc0de'
  },
  colorBall4:{
    height:20,
    width:20,
    borderRadius:10,
    marginLeft:5,
    backgroundColor:'#f0ad4e'
  },
  colorBall5:{
    height:20,
    width:20,
    borderRadius:10,
    marginLeft:5,
    backgroundColor:'#d9534f'
  },
  topIcons:{ paddingTop:8,alignSelf:'flex-end',marginLeft:8}
});
