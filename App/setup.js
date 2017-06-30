/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk';
import Login from './Login/login';
import Calender from './View/calender';

export default class English_Diary extends Component {

  /* Constructor method, state check login status */
  constructor() {
    super()
    this.state={'loggedIn': false}
  }

  /* Navigation header */
  static navigationOptions = {
    header:null
  };

  /* Check Facebook SDK allows access, login */
  async componentDidMount() {
    let FBAccessToken = await AccessToken.getCurrentAccessToken()
    if(FBAccessToken != null) {
      this.setState({'loggedIn': true})
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {this.state.loggedIn ?
           <Calender />:
           <Login viewchange={() => navigate('Calender')} test='zosu'/>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
