import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import { Translation } from '../Translator/translator';
import { GetKeyWord } from '../Translator/getKeyword';

export default class Calender extends Component {

  /* Constructor, state is Japanese and English text */
  constructor() {
    super()
    this.state=({'japanese':'', 'english':''})
  }

  /* Translate English to Japanese */
  async JETranslation(text) {
    this.setState({'english': text})
    const cipherText = await Translation(text)
    this.setState({'japanese': cipherText})
  }

  /* Get 3 keywords from text (Japanese) */
  async showKeywords() {
    const keywords = await GetKeyWord(this.state.japanese);
    console.log(keywords);
  }

  /* Header name */
  static navigationOptions = {
    header:null
  };

  /* Save today's content on Firebase */
  async saveFirebase() {
    console.log("hello my friend");
  }
  render() {
    return (
      <View>
        <TextInput
          style={{height: 300, width:300, borderColor: 'gray', borderWidth: 1}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.JETranslation(text)}
          value={this.state.english}
        />
        <Text>simultaneous translation</Text>
        <Text>{this.state.japanese}</Text>
        <Text>単語検索</Text>
        <TextInput
          style={{height:30, width:300, borderColor: 'gray', borderWidth: 1}}
          value="words you are looking for"
        />
        <Text>{this.state.english}</Text>
        <Button
          onPress={this.showKeywords.bind(this)}
          title="保存"
        />
        <Text>3つのキーワード</Text>
        <Button
          onPress={this.saveFirebase.bind(this)}
          title="firebaseに保存"/>
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
