import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} style={styles.scroll}>
        <View style={styles.draft1}></View>
        <View style={styles.draft2}></View>
        <View style={styles.draft3}></View>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'brown',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'

  },
  draft1: {
    height: 100,
    width: 100,
    backgroundColor: 'pink',
    margin: 10,
    
  },
  draft2: {
    height: 100,
    width: 100,
    backgroundColor: 'aqua',
    margin: 10,
    
  },
  draft3: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
    margin: 10,
    
  }
})