import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useState  } from 'react';

export default function Facebookposter({poster}) {
  const [Like, setLike] = useState(0)
  function likey()
  {
    setLike(Like + 1)
  }

  return (
    <View style={styles.container}>

      <Text>{poster}</Text>
      
      
      <Text>{Like}</Text>
      <Button onPress={likey} title='like post'/>
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