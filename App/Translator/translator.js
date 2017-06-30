import React, { Component } from 'react';
import { Text,View } from 'react-native';
import Parser from 'react-xml-parser';

export const Translation = async (english) => {
  try {

    /*　Auto translation, Microsoft api　*/
    let thankYouMicroSoft = await fetch("https://api.microsofttranslator.com/V2/Http.svc/TranslateArray", {
      method: "post",
      headers: {
        'Content-Type': 'text/xml',
        'Accept': '*/*',
        'Connection': 'keep-alive',
        'User-Agent': 'Translator/3098 CFNetwork/811.5.4 Darwin/16.6.0',
        'Accept-Language': 'ja-jp',
        'Accept-Encoding': 'gzip, deflate'
      },
      body: '<TranslateArrayRequest><AppId>000000000A9F426B41914349A3EC94D7073FF941</AppId><From>en</From><Options><ContentType xmlns="http://schemas.datacontract.org/2004/07/Microsoft.MT.Web.Service.V2">text/plain</ContentType></Options><Texts><string xmlns="http://schemas.microsoft.com/2003/10/Serialization/Arrays">'+ english +'</string></Texts><To>ja</To></TranslateArrayRequest>'
    })
    let reponseXml = new Parser().parseFromString(thankYouMicroSoft._bodyInit);
    let japanese = reponseXml.getElementsByTagName('TranslatedText')[0].value;
    return japanese;
  }catch(err) {
    return "network error";
  }
}

export const ReverseTranslatr = async (japanese) => {
  try {
    let thankYouMicroSoft = await fetch("https://api.microsofttranslator.com/V2/Http.svc/TranslateArray", {
      method: "post",
      headers: {
        'Content-Type': 'text/xml',
        'Accept': '*/*',
        'Connection': 'keep-alive',
        'User-Agent': 'Translator/3098 CFNetwork/811.5.4 Darwin/16.6.0',
        'Accept-Language': 'ja-jp',
        'Accept-Encoding': 'gzip, deflate'
      },
      body: '<TranslateArrayRequest><AppId>000000000A9F426B41914349A3EC94D7073FF941</AppId><From>en</From><Options><ContentType xmlns="http://schemas.datacontract.org/2004/07/Microsoft.MT.Web.Service.V2">text/plain</ContentType></Options><Texts><string xmlns="http://schemas.microsoft.com/2003/10/Serialization/Arrays">'+ english +'</string></Texts><To>ja</To></TranslateArrayRequest>'
    })
    let reponseXml = new Parser().parseFromString(thankYouMicroSoft._bodyInit);
    let japanese = reponseXml.getElementsByTagName('TranslatedText')[0].value;
    return japanese;
  }catch(err) {
    return "network error";
  }
}
