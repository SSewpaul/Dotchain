import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Initialization from './component/Initialization/Initialization.js';
import SuccessPage from './component/create/SuccessPage.js'
import TransactionSuccess from './component/current/TransactionSuccess';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChainsDisplay from './component/current/ChainsDisplay';
import MemberList from './component/current/MemberList';
import MemberView from './component/current/MemberView';
import Welcome from './component/welcome screen/Welcome.js';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator style={styles.container} initialRouteName="Initialization">
        <Stack.Screen name="Initialization" component={Initialization}/>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="ChainsDisplay" component={ChainsDisplay}/>
        <Stack.Screen name="MemberList" component={MemberList}/>
        <Stack.Screen name="MemberView" component={MemberView}/>
        <Stack.Screen name="TransactionSuccess" component={TransactionSuccess}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0ACB1',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
