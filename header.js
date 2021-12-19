import React from 'react';
import { View, Text, StyleSheet,input } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Welcome to my application</Text>
      <input placeholder ='type here'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 90,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  }
});
