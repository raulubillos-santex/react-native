import { ColorValue, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'


interface IconProperties{
    icon: keyof typeof Ionicons.glyphMap,
    color: ColorValue,
    onPress: () => void
}

const IconButton = ({color,icon,onPress}:IconProperties) => {
  return (
    <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && [styles.pressed]}
    >
        <Ionicons name={icon} size={20} style={styles.icon} color={color}></Ionicons>
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
    pressed: {
        opacity:0.7,
    },
    icon:{
        marginRight:20
    }
})