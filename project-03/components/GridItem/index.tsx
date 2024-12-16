import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

interface IProps{
    id: string,
    title: string,
    color: string,
    goToMeals: (id:string,title:string) => void
}

export default function GridItem({id,title,color,goToMeals}: IProps) {
  return (
    <Pressable 
        key={id} 
        style={({pressed}) => [styles.externalView, {backgroundColor: color, ...pressed&&{opacity:0.5}}]}
        onPress={() => { console.log(id);goToMeals(id,title); }}
    >
        <View style={styles.innerView}>
            <Text style={styles.text}>{title}</Text>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create(
    {
        externalView:{
            flex:1,
            margin:10,
            borderRadius:20
        },
        innerView:{
            flex:1,
            paddingVertical:80,
            paddingHorizontal:10,
            alignItems:"center",
            justifyContent:"center"
        },
        text:{
            fontWeight:"bold"
        }
    }
)