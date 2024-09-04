import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'

interface IProps {
    id: string,
    goal: string,
    onDelete: (key:string) => void
}

export default function Goal({id,goal, onDelete}:IProps): React.JSX.Element {
    return <Pressable 
            android_ripple={{color:"#6a2796"}}
            style={({pressed}) => pressed && styles.goalItemStylePressed}
            onPress={() => onDelete(id)}>
        <View style={styles.goalItemStyle}>
            <Text style={styles.goalStyle}>{goal}</Text>
        </View>
    </Pressable>
  }


const styles = StyleSheet.create({
    goalItemStyle:{
      margin:5,
      borderRadius:5,
      backgroundColor:"#ad42f5",
      padding:10
    },
    goalStyle:{
      color:"white",
    },
    goalItemStylePressed:{
      opacity:0.5
    },
  });
  