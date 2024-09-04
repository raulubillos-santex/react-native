import { PressableProps, Pressable, StyleSheet, View,StyleProp,ViewStyle } from 'react-native'
import React from 'react'

interface IProps extends PressableProps {
    styleButton?: ViewStyle,
}

export const Button:React.FC<IProps>  = (props) => {
  return (
    <Pressable {...props} style={({pressed}) => pressed && styles.buttonPressedView}>
        <View style={[styles.buttonView, props.styleButton]}>
            {props.children as React.ReactNode}
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    buttonView: {
        backgroundColor:"#850808",
        borderRadius:10,
        elevation:5,
        padding:10
    },
    buttonPressedView: {
        opacity:0.7,
        elevation:3
    }
  })