import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeView } from '../../components/SafeView'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/ParamList';
import { Button } from '../../components/Button';

type Props = NativeStackScreenProps<RootStackParamList, 'Finish'>;

export default function FinishScreen({route,navigation}: Props) {
  const {numberToGuess, steps} = route.params;

  const startNewGameSubmit = () => {
    navigation.navigate("EnterNumber");
  }

  return (
    <SafeView>
      <View style={styles.titleView}>
        <Text style={styles.title}>Game Over</Text>
      </View>
      <View style={styles.viewImage}>
        <Image source={require('../../assets/success.png')} style={styles.imageStyle}/>
      </View>
      <Text style={styles.winDescriptionStyle}>
        Your phone needed <Text style={styles.numberStyle}>{steps.length}</Text> rounds to guess the number <Text style={styles.numberStyle}>{numberToGuess}</Text>
      </Text>
      <Button styleButton={styles.buttonStyle} onPress={startNewGameSubmit}>
        <Text style={styles.buttonTextStyle}>
          Start New Game
        </Text>
      </Button>
    </SafeView>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    height:300,
    width:300,
    margin:8,
    borderRadius:200,
    borderWidth:2
  },
  viewImage: {
    alignItems:"center",
    justifyContent:"center"
  }, 
  titleView: {
    alignItems:"center",
    justifyContent:"center",
  },
  title: {
    borderWidth:5,
    borderColor:"white",
    margin:20,
    paddingVertical:30,
    paddingHorizontal:100,
    fontSize:25,
    fontWeight:"bold",
    color: "white",
  },
  winDescriptionStyle: {
    fontSize:27,
    textAlign:"center",
    fontWeight:'light',
    marginHorizontal:10
  },
  numberStyle: {
    color:"#850808",
    fontWeight:"bold"
  },
  buttonStyle: {
    borderRadius:100,
    marginVertical:40,
    marginHorizontal:70,
    alignItems:"center"
  },
  buttonTextStyle: {
    color: "white"
  }
})