import { View, Text, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'
import React, { useState } from 'react'

interface IProps{
    addGoal: (goal:String) => void,
    onClose: () => void,
    open: boolean
}

export default function GoalInput({addGoal, open, onClose}:IProps) {

  const [currentGoal, setCurrentGoal] = useState<String>("");


  const onChangeGoal = (text: String) => {
    setCurrentGoal(text);
  }

  const addGoalHandler = () => {
    if(currentGoal){
        addGoal(currentGoal);
        setCurrentGoal('');
        onClose();
    }

  }

  return (
    <Modal visible={open} animationType='slide'>
        <View style={styles.textInputView}>
            <Image source={require('../../assets/images/goal.png')} style={styles.imageStyle}/>
            <TextInput style={styles.textInput} value={currentGoal as string} onChangeText={onChangeGoal} placeholder='Try to put some goals you bitch!' />
            <View style={styles.buttonsView}>
                <Button title='Add bitchy goals' color="#ad42f5" onPress={addGoalHandler}/>
                <Button title='Cancel' color="red" onPress={onClose}/>
            </View>
        </View>
    </Modal>
  )
}


const styles = StyleSheet.create({
    textInput:{
      borderColor:"#1d065c",
      borderStyle:"solid",
      backgroundColor:"#6c3deb",
      borderWidth:1,
      padding:10,
      margin:8,
      color:"#d6cbf5",
      borderRadius:5,
      width:200
    },
    textInputView:{
      flex:1,
      justifyContent: "center",
      alignItems:"center",
      borderBottomColor:"#D3D3D3",
      borderBottomWidth:1,
      backgroundColor:"#1d065c"
    },
    buttonsView:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    imageStyle: {
        height:100,
        width:100,
        margin:8
    }
  });
  