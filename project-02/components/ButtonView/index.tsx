import { View, StyleSheet, ViewProps } from 'react-native'
import React from 'react'

export default function ButtonView({style,...props}: ViewProps) {
  return (
    <View style= {{...styles.buttonZone, ...style?.valueOf() as object}} {...props}>
      {props.children}
    </View>
  )
}


const styles = StyleSheet.create({
  buttonZone:{
    flexDirection:"row",
    alignContent:"space-between",
    justifyContent:"space-around",
  },
})