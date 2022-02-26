import React from 'react';

import { StyleSheet } from 'react-native';
import { NativeBaseProvider, Text, Box ,StatusBar , View} from 'native-base';
import Details from './components/details'
import Home from './components/home'
import UsersProvider from './context'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Default = createNativeStackNavigator();

export default function App() {
  console.log("From  App")
  console.log("From ")
  return (
   <UsersProvider>
    <NativeBaseProvider>
      <StatusBar hidden/>
      <NavigationContainer>
        <Default.Navigator initialRouteName="home">
          <Default.Screen name="home" component={Home}/>
          <Default.Screen name="details" component={Details}/>
        </Default.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
    </UsersProvider>
  
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
