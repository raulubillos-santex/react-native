import { ColorValue, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'


interface IconProperties{
    icon: keyof typeof Ionicons.glyphMap,
    color: ColorValue,
    colorPressed: ColorValue,
    isActive: boolean,
    onPress: () => void
}

const IconButton = ({color,icon,onPress,colorPressed,isActive}:IconProperties) => {
  return (
    <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && [styles.pressed]}
    >
        <Ionicons name={icon} color={isActive?colorPressed:color} ></Ionicons>
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
    pressed: {
        opacity:0.7
    }
})