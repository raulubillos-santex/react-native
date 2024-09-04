import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, NativeSyntheticEvent, ScrollView, StyleSheet, Text, TextInput, TextInputChangeEventData, View, Image } from 'react-native';
import "react-native-get-random-values";
import {v4} from "uuid";
import Goal from './component/Goal';
import GoalInput from './component/GoalInput';


export default function App() {
  const [goals, setGoals] = useState<{key:string,goal:string}[]>([]);
  const [open, setOpen] = useState(false);

  const  addGoal= (currentGoal:String) => {
    setGoals((goals) =>{return [...goals,{key:v4() ,goal:currentGoal+", you bet bitch"}]});
  }

  const onDelete = (key: string) => {
    console.log(key);
    setGoals((goals)=> {
      return goals.filter(goal => goal.key !== key);
    })
  }

  const openCloseModal = () => {
    setOpen(open => !open);
  }


  return (
    <>
      <StatusBar backgroundColor='white' style={'light'}/>
      <View style={styles.container}>
        <Button title='Add Goal' color={"#ad42f5"} onPress={openCloseModal}/>
        <GoalInput addGoal={addGoal} onClose={openCloseModal} open={open}/>
        <View style={styles.listView}>
          <Text style={styles.titleStyle}>List of bitches</Text>
          <FlatList
            data={goals}
            renderItem={item => <Goal id={item.item.key} goal={item.item.goal} onDelete={onDelete} />}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingTop:70,
    paddingLeft:30,
    paddingRight:30,
    backgroundColor:"#1d065c",
    flex:1,
    justifyContent:"flex-start"
  },
  listView:{
    flex:9,
    justifyContent: "flex-start",
    alignContent:"center",
  },
  titleStyle: {
    marginBottom:10, 
    color:"white"
  }
});



