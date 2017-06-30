import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Setup from './setup';
import Calender from './View/calender';

/* React-Navigation */
export const English_Diary = StackNavigator({
  Home: { screen: Setup },
  Calender: { screen: Calender },
});
