import React from 'react'
import { Alert, Dimensions, ScrollView } from 'react-native'
// import Carousel from 'react-native-snap-carousel';
import ValidationComponent from 'react-native-form-validator'
import axios from '../../config/axios.js'
// import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import HeaderBar from '../../layouts/HeaderBar/HeaderBar.js'
import Dashboard1 from '../Dashboard/Dashboard.js'
import styles from './styles.js'

// const DashboardContainer = createAppContainer(Dashboard1);

const window = Dimensions.get('window')

const BannerWidth = Dimensions.get('window').width
const BannerHeight = 260

export default class CarouselPage extends ValidationComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    axios.get('/api/users/get/useravailable').then(res => {
      console.log(res)
      if (res.data == 'NOT_VALID') {
        Alert.alert('', 'Contact admin for account activation')
        this.props.navigation.navigate('LogIn')
      }
    })
  }

  render() {
    const { navigate, dispatch } = this.props.navigation
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <HeaderBar
          navigate={navigate}
          navigation={this.props.navigation}
          headerTitle="माढा विधानसभा २०१९"
          toggle={() => this.toggle.bind(this)}
          openControlPanel={() => this.openControlPanel.bind(this)}
        />

        <Dashboard1 />
      </ScrollView>
    )
  }
}
