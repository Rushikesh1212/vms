import {StyleSheet, Dimensions,Platform} from 'react-native';
const window = Dimensions.get('window');
import {colors} from '../../config/styles.js';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

 
  videoBlock: {
    margin: 10,
    width: (window.width - 85) * 0.5
  },
  button: {
    width: (window.width - 90) / 3,
    height: 50,
    backgroundColor: '#f7ac57'
  },
  head: {
    backgroundColor: '#6d6e70',
  },
  text: {
    textAlign: 'center',
    padding:10
  },
  headText: {
    textAlign: 'center',
    color:'#fff',
    padding:10
  },
  modalContent: {
    backgroundColor: 'white',
    width:window.width - 40,
    padding:10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
},
buttonClose:{
  width: (window.width - 80) / 2,
  height: 50,
  backgroundColor: '#f7ac57'

},
buttonDelete:{
  width: (window.width - 80) / 2,
  height: 50,
  backgroundColor: '#0000ff'
},
outerContent: {
    borderBottomWidth:0, 
    backgroundColor: '#f7ac57',
    // height:80,//for ios
    // height:60,//others
    height:((Platform.OS === 'ios') ? 80 : 60),
    // paddingTop:30,//ios
    // paddingTop:0,//others
    paddingTop:((Platform.OS === 'ios') ? 30 : 0),
    margin:0,
  },
  notifView: {
    backgroundColor: colors.primary,
    paddingTop:((Platform.OS === 'ios') ? 50 : 0),
    height:((Platform.OS === 'ios') ? 100 : 60),


  }
});
