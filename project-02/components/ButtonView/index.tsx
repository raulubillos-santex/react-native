import { View, StyleSheet, ViewProps } from 'react-native'
import React from 'react'

export default function ButtonView(props: ViewProps) {
  return (
    <View style= {styles.buttonZone} {...props}>
      {props.children}
    </View>
  )
}


const styles = StyleSheet.create({
  buttonZone:{
    flexDirection:"row",
    alignContent:"space-between",
    justifyContent:"space-around"
  },
})