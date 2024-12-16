import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/Colors'

interface IProps {
    text:string
}

const Step = (props: IProps) => {
  return (
    <View style={styles.stepView}>
      <Text style={styles.stepText}>{props.text}</Text>
    </View>
  )
}

export default Step

const styles = StyleSheet.create({
    stepView: {
        backgroundColor:Colors.primary50,
        borderRadius:10,
        padding:10,
        marginVertical:15,
        alignItems: "center",
    },
    stepText: {
        fontWeight:"600",
        color:Colors.primary900,
    }
})