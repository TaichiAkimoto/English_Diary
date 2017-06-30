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
import firebase from 'firebase';
import { StackNavigator } from 'react-navigation';
import { config } from '../Utilities/config';

const firebaseRef = firebase.initializeApp(config)

export default class Login extends Component {
  constructor(props) {
    super(props)
  }
  async _fbAuth() {
    try{
    const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email'])
      try{
        const accessTokenData = await AccessToken.getCurrentAccessToken()
        const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken)
        try{
          const result = await firebase.auth().signInWithCredential(credential)
          this.props.viewchange()

          /* Firebase realtime database, uid as root */
          try{
            firebaseRef.database().ref().set(result.uid)
          }catch(err){
            console.log(err);
          }

          }catch(err) {
            console.log(err);
          }
        }catch(err) {
          console.log(err);
        }
      }catch(err) {
        console.log(err);
      }
    }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._fbAuth.bind(this)}>
          <Text>
            Login with Facebook
          </Text>
        </TouchableOpacity>
      </View>
    );
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
