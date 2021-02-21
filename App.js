import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './component/welcome screen/Welcome.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCD7FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
