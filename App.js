import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Initialization from './component/Initialization/Initialization.js';
import SuccessPage from './component/create/SuccessPage.js'
import TransactionSuccess from './component/current/TransactionSuccess';
import InitializationWelcomeNavigator from './routes/IntializationWelcomeNavigator.js';

export default function App() {
  return (
    <View style={styles.container}>
      <InitializationWelcomeNavigator/>
      <StatusBar style="auto" />
    </View>
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
