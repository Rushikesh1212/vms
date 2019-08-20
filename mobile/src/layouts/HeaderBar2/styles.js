import {StyleSheet, Dimensions,Platform} from 'react-native';
import {colors} from '../../config/styles.js';

const window = Dimensions.get('window');

export default StyleSheet.create({
  
  bellIcon: {
    paddingRight:20,
    marginRight:10,
    
    // paddingTop:20
  },
  notificationText: {

       ...Platform.select({
      ios:{
            position: 'absolute',
            right: 0,
            top: -8,
            borderRadius: 29,
            width: 15,
            height: 15,
            textAlign: 'center',
            color: '#fff',
            fontSize: 12,
            // borderStyle: 'solid',
            // borderWidth: 1,
            backgroundColor: '#dc3545',
            fontFamily:"Montserrat-Regular",


      },
      android : {
        // alignItems:'center'
            position: 'absolute',
            right: 0,
            top: -4,
            borderRadius: 9,
            width: 18,
            height: 18,
            textAlign: 'center',
            color: '#fff',
            fontSize: 12,
            // borderStyle: 'solid',
            // borderWidth: 1,
            backgroundColor: '#dc3545',
            fontFamily:"Montserrat-Regular",

      }
    })

        // borderTopLeftRadius: 15, 
        // borderTopRightRadius: 15,
        // borderBottomRightRadius: 15,
        // borderBottomRightRadius: 15,
  },
  headerrightside:{
    // flexDirection:'row',
    // justifyContent:'space-between',
    // marginTop:15,
    marginLeft:10
  },
  outerContent: {
    borderBottomWidth:0, 
    backgroundColor: '#f7ac57',
    // height:80,//for ios
    // height:60,//others
    // height:
    // height:((Platform.OS === 'ios') ? 80 : 60),
    // paddingTop:30,//ios
    // paddingTop:0,//others
    // paddingTop:((Platform.OS === 'ios') ? 30 : 0),
    margin:0
  },

  title:{
    color: '#fff',
    fontFamily:"Montserrat-SemiBold",
    fontSize: 18,
    alignSelf:'center',
    backgroundColor:'transparent',
    textAlign:'center'
  },

  headertitlebar:{
      ...Platform.select({
      ios:{
          alignItems:'center',
          justifyContent:'center',
          // paddingLeft:55


      },
      android : {
        alignItems:'center',
        borderRadius:0
        // backgroundColor:'#0ff'
      }
    })
   
  },

  container:{
    backgroundColor:'#eee',
    padding:0,
    margin:0,
    paddingTop:0,
    // marginTop:-10,
    // marginBottom:-10,
    ...Platform.select({
      ios:{
         height: 85 ,
    paddingTop:25,
    // marginTop: 0 : 0,

      },
      android : {
        // alignItems:'center'
      }
    }) 
  },

  searchContainer:{
    width:'100%',
    padding:0,
    borderTopWidth:0,
    borderBottomWidth:0,
    backgroundColor:'#eee'
  },
  searchInputContainer:{
    backgroundColor:'#fff',
    borderTopWidth:1,
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderRadius:50
  },
  searchInput:{
    fontSize:13,
    fontFamily:"Montserrat-Regular"
  },

});
