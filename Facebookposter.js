import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function Facebookposter({poster}) {
  return (
    <View style={styles.container}>

      <Text>{poster}</Text>
      
      
      <Button title="Like post" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: 1,
        borderColor:'black',
        padding: 15,
        marginBottom: 5,
    }
})