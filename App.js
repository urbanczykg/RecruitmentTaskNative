import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,Image, View,SafeAreaView,TouchableNativeFeedback, Button } from 'react-native';
import Header from './Components/Header'
import Button1 from './Components/Button'

export default function App() {
  return (
    <View style={styles.container}>
     <Header />
    <Button1 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
