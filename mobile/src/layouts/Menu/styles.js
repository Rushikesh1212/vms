import { StyleSheet, Dimensions } from 'react-native';
import {colors} from '../../config/styles.js';
const window = Dimensions.get('window');

export default StyleSheet.create({
  bgImage:{
    // flex:1,
    width:null,
    height:window.height,
    alignItems:'center',
    padding:10,
    opacity:1,
    borderBottomWidth:2,
    borderColor:'#fff'
  },
  container:{
    // flex:1,
    width:'100%',
    height:'100%',
    backgroundColor:'#fff',
  },
  imageOuterCircle:{
    height:100,
    width:100,
    backgroundColor:'transparent',
    borderRadius:100/2,
    borderWidth:2,
    borderColor:colors.primary,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    marginBottom:10,
  },
  headText:{
    fontSize:17,
    color: colors.buttonText,
    fontFamily:"Montserrat-SemiBold",
  },
  menuWrapper:{
    // backgroundColor:'#ff0',
    width:'100%',
    alignItems:'center',
    marginTop:"10%"
  },
  menu:{
    flexDirection: 'row',
    borderBottomWidth:1,
    alignItems:'center',
    justifyContent:'flex-start',
    borderColor: colors.textLight,
    paddingVertical:15,
    width:'80%',
  },
  menuText:{
    color: '#333',
    // flex:0.8,
    width:'88%',
    fontSize: 15,
    alignSelf:'flex-start',
    fontFamily:"Montserrat-Regular",
  },
  iconContainer:{
    // flex:0.2,
    width:'12%',
    alignItems:'flex-start'
  },
   ddContainer:{
    backgroundColor:'#eee',
    height: 'auto',
    borderWidth:1,
    borderRadius:50,
    marginTop:20,
    borderColor:"#aaa"
    // fontFamily:"Montserrat-Regular"
  },
  ddItemText:{
    fontFamily:"Montserrat-Regular",
     backgroundColor:'#eee',
  },
  ddInputContainer:{
    borderBottomColor: 'transparent',
    paddingLeft:5,
    height:30,

  },
  ddLabelText:{
    backgroundColor:'#eee',
    top:-5,
    left:5,
    fontFamily:"Montserrat-Regular",
    fontSize:15,
    paddingHorizontal:5
  },
  ddStyle:{
    fontFamily:"Montserrat-Regular"
  },
});