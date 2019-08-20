import {StyleSheet,Dimensions,Platform} from 'react-native';
const window = Dimensions.get('window');

export default StyleSheet.create({


  container:{
    backgroundColor:'transparent',
    padding:0,
    margin:0,
    paddingTop:0,
    // position:'absolute',

    marginTop:-10,
    marginBottom:-10,
    ...Platform.select({
      ios:{
         height: 85 ,
    paddingTop:25,
    // position:'absolute',
    backgroundColor:'transparent',
    // marginTop: 0 : 0,

      },
      android : {

      	backgroundColor:'transparent',
        // alignItems:'center'
      }
    }) 
  },
});