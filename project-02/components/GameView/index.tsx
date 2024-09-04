import { View, StyleSheet, ViewProps } from 'react-native'
import React from 'react'

export default function GameView(prop: ViewProps) {
  const {style, ...props} = prop;
  return (
    <View style= {[defaultStyles.gameZone, style]} {...props}>
      {props.children}
    </View>
  )
}


const defaultStyles = StyleSheet.create({
    gameZone:{
      backgroundColor:"#530606",
      borderRadius:10,
      padding:30
    },
})