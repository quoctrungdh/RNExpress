import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Box() {
	return (
    <View style={styles.box} />
  )
}

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'steelblue',
    margin: 5
  }
})