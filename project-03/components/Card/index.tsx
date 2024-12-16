import { Dimensions, Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface IProps{
  imageLink: string,
  title: string,
  text: string,
  onPress: () => void
}

const Card = ({imageLink,text,title,onPress}:IProps) => {
  return (
    <Pressable style={({pressed}) => [styles.card, pressed&&{opacity:0.5}]} onPress={onPress}>
      <ImageBackground borderTopLeftRadius={10} borderTopRightRadius={10} style={styles.imageContainer} source={{uri:imageLink}}/>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    flex:1,
    margin:15,
    backgroundColor:"white",
    borderRadius:10
  },
  imageContainer: {
    flex:3,
    minHeight:200,
    minWidth:40,
  },
  textContainer: {
    flex:1,
    padding:15,
    alignItems:"center"
  },
  title:{
    fontWeight:"bold",
    marginBottom:7.5
  },
  text: {
    fontWeight:"300"
  }
})