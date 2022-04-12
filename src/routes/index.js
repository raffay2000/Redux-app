import Home from '../screens/Home'
import Profile from '../screens/Profile'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import TodoApp from '../screens/TodoApp';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="TodoApp" component={TodoApp} />


    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Routes
