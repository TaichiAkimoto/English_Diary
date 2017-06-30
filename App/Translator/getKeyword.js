import React, { Component } from 'react';
import { Text,View,TextInput } from 'react-native';

export const GetKeyWord = async (text) => {
  try {

    /* Get keywords from Japanese sentence, goo lab's API */
    let nlp = await fetch("https://labs.goo.ne.jp/api/keyword", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "app_id": "0f4523dda7d1a0c59358363d80dc60808db255e91116c8f72e3f305d3d267453",
        'title':'デート',
        "body": text,
        "max_num": 3
      })
    })
    let keyList = makeKeyList(nlp._bodyInit);
    return keyList;
  }catch(err) {
    return "network error";
  }
}

/* Remove tags */
const makeKeyList = (bodyText) => {
  let responseBody = JSON.parse(bodyText);
  let keyWords = responseBody.keywords;
  let keyList = [];
  for(var count=0; count < keyWords.length; count++) {
    let json = keyWords[count];
    let key = Object.keys(json)[0];
    keyList.push(key);
  }
  return keyList;
}
