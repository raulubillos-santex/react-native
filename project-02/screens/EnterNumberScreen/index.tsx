import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeView } from '../../components/SafeView'
import { Button } from '../../components/Button'
import InputSection from '../../section/InputSection'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../types/ParamList'

type Props = NativeStackScreenProps<RootStackParamList, 'EnterNumber'>;

export default function EnterNumberScreen({navigation}:Props) {
  const submitFunction=(number:number) => {
    navigation.navigate("Game", {number});
  }

  return (
    <SafeView>
      <View style={styles.titleView}>
        <Text style={styles.title}>Guess my number</Text>
      </View>
      <View style={styles.gameView}>
        <InputSection submitFunction={submitFunction}></InputSection>
      </View>
    </SafeView>
  )
}

const styles = StyleSheet.create({
  titleView: {
    alignItems:"center",
    justifyContent:"center",
    flex:1,
  },
  title: {
    borderWidth:5,
    borderColor:"#ffff",
    margin:20,
    textAlign:"center",
    textAlignVertical:"center",
    padding:10,
    fontSize:30,
    fontWeight:"bold",
    color: "#ffff",
  },
  gameView:{
    flex:6,
    marginTop:10,
    padding:30
  },
})