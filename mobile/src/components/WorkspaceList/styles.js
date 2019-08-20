import { StyleSheet, Dimensions,Platform } from 'react-native';
import { colors } from '../../config/styles.js';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
const window = Dimensions.get('window');


export default StyleSheet.create({
 title:{
  fontFamily:"Montserrat-Bold",fontSize:20,color:'#fff',textAlign:'left',marginTop:10
  },
  titleInfo:{
    fontFamily:"Montserrat-Bold",fontSize:20,color:'#333',textAlign:'left',
  },
  time:{
    fontFamily:"Montserrat-Bold",fontSize:14,color:'#fff',
  },
   timeInfo:{
    fontFamily:"Montserrat-SemiBold",fontSize:14,color:'#666',flexWrap: "wrap"
  },
  MenuInfo:{
        fontFamily:"Montserrat-SemiBold",fontSize:13,color:'#666',flexWrap: "wrap"
  },
  showMoreText:{
    fontFamily:"Montserrat-SemiBold",
    fontSize:13,
    color:'#0275D8',
    textAlign:'center'
  },
   directionInfo:{
    fontFamily:"Montserrat-SemiBold",
    fontSize:10,
    color:'#333',
    textAlign:"center"
  },
  aminitiesInfo:{
    fontFamily:"Montserrat-SemiBold",fontSize:13,color:'#666',flexWrap: "wrap",textAlign:'center'
  },
  directionInfos:{
    fontFamily:"Montserrat-SemiBold",
    fontSize:11,
    color:'#666',
    marginTop:5,
  },
  openclosecard:{
    // backgroundColor:'#ff0',
    width: 80,
    fontFamily:"Montserrat-SemiBold",
    fontSize:16,
    color:'#fff',
    textAlign:'left',
    textTransform: 'uppercase',
    transform: [{ rotate: '270deg'}],
    alignSelf: 'center',
    paddingLeft:10,
    // marginVertical:48
  },
  statusWrapper:{
    flex:0.1,
    // width: '18%',

    borderTopRightRadius:25,
    borderBottomRightRadius:25,
    alignItems:'center',
    justifyContent:'center',
  },
  bgOpen:{
    backgroundColor: '#34be34'
  },
  bgClose:{
    backgroundColor: '#DB4437'
  },
  bgImages:{
    width:'100%',
    // height:150,
    // minHeight:window.height-25, 
    // backgroundColor: '#f1f1f1',
  },
    container:{
    // backgroundColor: '#f1f1f1',
    // width:"100%",
     minHeight:window.height-25, 

  },
  backgroundImage:{
    flex: 1,
    // backgroundColor: '#f1f1f1',
    resizeMode: 'cover',
    width:'100%',
     minHeight:window.height-25, 
  },
  workspaceStatus:{
    fontFamily:"Montserrat-Bold",
    fontSize:14,
    textAlign:'left',
    color:'#333'
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
   buttonConfirm:{
     width:'100%',
    backgroundColor: '#34be34',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:30,
  },
  buttonCancel:{
     width:'100%',
    backgroundColor: '#DB4437',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:30,
  },
  btnWrap:{
    alignSelf:'flex-start',
    alignItems:"flex-start", 
    backgroundColor:'#0275D8',
    borderColor:'#0275D8',
    borderWidth:1,
    padding:10,
    borderRadius:15
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
  buttonContainer1:{
    width:'40%',
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
  directionIcon:{
    backgroundColor:'#0275D8',
    borderWidth:1,
    padding:10

  },
  TextInfo:{
    fontFamily:"Montserrat-Bold",fontSize:16,color:'#333',
  },
  subText:{
    fontFamily:"Montserrat-Bold",
    fontSize:14,
    color:'#666',
  },
  evetntInfo:{
    fontFamily:"Montserrat-Bold",fontSize:16,color:'#333',textAlign:"center",marginBottom:15
  }, 
  carouselImage:{
    // backgroundColor:'#aaa',
    height:200,
    width:'100%',
    backgroundColor:'#f0f'
      },
    

  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 200
  },
  row: {
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flex: 1
  },
  bullet: {
    width: 35,
    marginTop:15,
  },
  bulletText: {
    flex: 1,
    marginTop:15
  },
  boldText: {
    fontWeight: 'bold'
  },
  normalText: {
  },
  // workspaceView:{
  //   backgroundColor:'#fff',
  //   // top:"5%",
  //   // minHeight:500,
  //   // minHeight:window.height-1000, 
  //   position:'absolute',
  //   zIndex:1,
  //   // marginTop:"50%",
  //   // marginBottom:35,
  //   // margin:0,
  //   // padding:0,
  //   paddingTop:15,
  //   paddingBottom:15,
  //   borderTopRightRadius:20,
  //   borderTopLeftRadius:20,
  //   borderTopWidth:4,
  //   borderLeftWidth:0,
  //   borderRightWidth:0,
  //   borderTopEndRadius:10,
  //   borderBottomWidth:0,
  //   borderLeftColor:'transparent',
  //    borderRightColor:'transparent',
  //     borderBottomColor:'transparent',
  //   // borderLeftWidth:0,
  //   // borderRightWidth:0,
  //   //  borderBottomWidth:0,
  //   // borderRadius:25
    
  // },
  borderOpen:{
    borderColor:'#34be34',
     borderLeftColor:'#fff',
    borderRightColor:'#fff',
    borderBottomColor:"#fff",
  },
  borderClose:{
    borderColor:'#DB4437',
     borderLeftColor:'#fff',
    borderRightColor:'#fff',
    borderBottomColor:"#fff",
  },
  textOpen:{
    color:'#34be34',
  },
  textClose:{
    color:'#DB4437',
    fontFamily:"Montserrat-Bold",
    fontSize:18,
    textAlign:'left',
  },
  card:{
    backgroundColor:'#fff',
    // padding:0,
    paddingHorizontal:0,
    paddingTop:0,
    // paddingBottom:100,
    marginBottom:0,
    alignSelf:'center',
    width:"100%",
    position:"absolute",
    // zIndex:1,
    bottom:60,
    // marginTop:-50,
    // top:'35%',
    top:(window.height/3),
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    borderTopWidth:4,
    borderLeftWidth:0.25,
    borderRightWidth:0.25,
    height:null,
    // minHeight:window.height-25,
    // paddingBottom:25
  },
  footer:{
    // flex:1,
    width:'100%',
    position:'absolute',
    bottom:0,
    height:60,
    flexDirection:'row',
    backgroundColor:'#fff',
    paddingHorizontal:20,
    borderTopWidth:1,
    borderTopColor:'#ccc',
    elevation: 15,
    justifyContent:'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonTextQ: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },


// container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor:'white'
//   },
  button: {
    alignItems: 'center',
    backgroundColor: '#2c3539',
    padding: 10,
    width:300,
    marginTop:16
  },
  heading: { 
    color: 'black', 
    fontSize: 24, 
    alignSelf: 'center', 
    padding: 10, 
    marginTop: 30 
  },
  simpleText: { 
    color: 'black', 
    fontSize: 20, 
    alignSelf: 'center', 
    padding: 10, 
    marginTop: 16
  }
  

 });