import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function BoxObjectModelScreem() {
  return (
    <View  style={styles.container}>
      <Text style={styles.title}>BoxObjectModelScreem</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'red',
          
    },
    title: {
        fontSize: 50,
    }

})