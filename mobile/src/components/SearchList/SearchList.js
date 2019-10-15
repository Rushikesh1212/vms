import React, { Component } from "react";
import { Dimensions, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import axios from '../../config/axios.js';
import Loading from '../../layouts/Loading/Loading.js';





 const window = Dimensions.get('window');
export default  class SearchList extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: '',
      data: '',
    };
  }
  componentDidMount(){
    var category = this.props.navigation.getParam('category','')
    var boothName = this.props.navigation.getParam('boothName','')
    console.log('category',category)
    // console.log('boothName',boothName)
    if(category==''){
      axios.get('api/voters/get')
        .then(response=>{
          // console.log(response.data)
          this.setState({data:response.data})
        })
        .catch(error=>{
          console.log(error)
        })
    }else{
      var searchCategory
      if(category=='visited'){
        searchCategory={
          visited:true
        }
      }else if(category == 'dead'){
        searchCategory={
          dead:true
        }  
      }else if(category == 'boothName'){
        searchCategory={
          boothName:boothName
        }
      }else if(category == 'favourite'){
        searchCategory={
          favourite:true
        }
      }
      axios.post('/api/search/voters/',searchCategory)
        .then(response=>{
          // console.log('response. for search',response)
          this.setState({data:response.data})
        })
        .catch(error=>{
          // console.log('error',error)
        })
      console.log('searchCategory',searchCategory)
    }
    // BackHandler.addEventListener('hardwareBackPress',this.androidBackHandler.bind(this));
  }
  componentWillUnmount() {
    // BackHandler.removeEventListener('hardwareBackPress',this.androidBackHandler.bind(this));
  }

  toggle() {
    //
    let isOpen = !this.state.isOpen;
      this.setState({
        isOpen
      });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
  });


  closeControlPanel = () => {
    this._drawer.close()
  }

  openControlPanel = () => {
    this._drawer.open()
  }

  onFocus(){
    this.setState({
      borderColor: '#337ab7'
    })
  }
  onBlur(){
     this.setState({
        borderColor: '#666'
    })
  }

  updateNameSearch = voterName => {
    this.setState({ voterName });
    // console.log('searchText',voterName)
    var voterName = {
      voterName
    }
    // console.log('searchValue',voterName)
    axios.post('/api/search/voters/',voterName)
      .then(response=>{
        // console.log('response. for search',response)
        this.setState({data:response.data})
      })
      .catch(error=>{
        // console.log('error',error)
      })
  }

  updateCardSearch = idNumber => {
    this.setState({ idNumber });
    // console.log('searchText',idNumber)
    var voterName = {
      idNumber
    }
    // console.log('searchValue',searchValue)
    axios.post('/api/search/voters/',voterName)
      .then(response=>{
        console.log('response. for search',response)
        this.setState({data:response.data})
      })
      .catch(error=>{
        console.log('error',error)
      })
  };
  render(){

    const { navigate, goBack, state } = this.props.navigation;

    // const menu = <MenuBar navigate={navigate} />;
   
    // var navigationView = <NotificationCommon closeDrawer={this.closeDrawer} notificationData={[]} navigation={this.props.navigation}/>

    return(
            <ScrollView  keyboardShouldPersistTaps="handled" >
              <View style={{ backgroundColor:'#337ab7',paddingHorizontal:10,paddingVertical:20,justifyContent:'space-between',borderColor:'#337ab7',borderBottomWidth:2,shadowOffset:{  width: 10,  height: 10,  },shadowColor: '#337ab7',shadowOpacity: 1.0,}}>
                {/*<View style={{paddingTop:5}}>
                  <Text style={{color:"#f1f1f1",fontFamily:"Montserrat-SemiBold"}}>Search</Text>
                </View>*/}
                <View style={{flexDirection:'row'}}>
                  <View style={{flex:0.5,flexDirection:'row',height: 30,paddingBottom:0, width: '100%', backgroundColor:"transparent"}}>
                      <Text style={{flex:0.3,fontFamily:"Montserrat-SemiBold", color:"#f1f1f1",marginTop:5}}>Name</Text>   
                      <View style={{flex:0.5,height:60}}>
                       <TextInput
                            style={{borderColor: this.state.borderColor,borderBottomWidth: 2,padding:0}}
                            placeholder="Name"
                            onChangeText = {this.updateNameSearch}
                            value={this.state.name}
                            onBlur={ () => this.setState({borderColor:'#666'}) }
                            onFocus={ () => this.setState({borderColor:'#000'}) }
                          /> 
                      </View>
                  </View>
                  <View style={{flex:0.4,flexDirection:'row',height: 30,paddingBottom:0, width: '100%', backgroundColor:"transparent"}}>
                      <Text style={{flex:0.3,fontFamily:"Montserrat-SemiBold", color:"#f1f1f1",marginTop:5}}>Card</Text>   
                      <View style={{flex:0.7,height:60}}>
                       <TextInput
                            style={{borderColor: this.state.borderColor,borderBottomWidth: 2,padding:0}}
                            placeholder="Card"
                            onChangeText = {this.updateCardSearch}
                            value={this.state.card}
                            onBlur={ () => this.setState({borderColor:'#666'}) }
                            onFocus={ () => this.setState({borderColor:'#000'}) }
                          /> 
                      </View>
                  </View>
                </View>
              </View>
              <View style={{width:'100%'}}>
                  { this.state.data ? 
                      this.state.data.length > 0 ? 
                        this.state.data.map((data,index)=>{
                          return(
                            <TouchableOpacity style={{flexDirection:'row',paddingVertical:10,paddingHorizontal:10,borderWidth:1,borderColor:'#333', blurRadius:90,}} onPress={()=> this.props.navigation.navigate('VoterProfile',{user_id:data._id})} key={index}>
                              <Text style={ { flex: 0.1, fontFamily: 'Montserrat-Regular', fontSize: 10 } }> { data.serialNo}</Text>
                                <Text style={{flex:0.6,fontFamily:'Montserrat-SemiBold',paddingLeft:30,backgroundColor:'transparent'}}>{data.mFullName}</Text>
                                <Text style={{flex:0.3,fontFamily:'Montserrat-SemiBold'}}>{data.idNumber}</Text>
                            </TouchableOpacity>
                          )
                        })
                      :  <Text style={{flex:0.1}}> No Voter found</Text>
                    : <Loading />
                  }
              </View>
            </ScrollView>
    );
  }
}
  

 