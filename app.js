import React, { useState } from 'react';
import { StyleSheet, View, } from 'react-native';
import Header from './header';


export default function App() {
  


 

  

  return (
    <View style={styles.container}>
    <Header />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf0',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
