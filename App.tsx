import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'

import Home from './src/views/Home'
import WordDefinition from './src/views/WordDefinition'

const Stack = createStackNavigator()

export default function App() {
  const screenOptions: StackNavigationOptions = {
    headerShown: false,
    animationEnabled: false,
    gestureEnabled: false,
  }

  const [fontsLoaded] = useFonts({
    'katwijkmono-regular': require('./src/assets/fonts/katwijkmono-regular.ttf'),
    'panamera-bold': require('./src/assets/fonts/panamera-bold.ttf'),
    'roboto-italic': require('./src/assets/fonts/roboto-italic.ttf'),
  })

  if (!fontsLoaded) return null

  return (
    <NavigationContainer>
     <Stack.Navigator mode="modal" initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={screenOptions} />
      <Stack.Screen name="WordDefinition" component={WordDefinition} options={screenOptions} />
     </Stack.Navigator>
    </NavigationContainer>
  )
}
