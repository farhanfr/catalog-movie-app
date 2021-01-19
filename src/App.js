import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import { BottomNavigation } from './routers';


export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <BottomNavigation/>
      </NavigationContainer>
    )
  }
}

export default App
