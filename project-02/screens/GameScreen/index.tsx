import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeView } from '../../components/SafeView'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/ParamList';
import { generateRandomBetween } from '../../utils/random';
import GameView from '../../components/GameView';
import ButtonView from '../../components/ButtonView';
import { Button } from '../../components/Button';
import {Ionicons} from '@expo/vector-icons';

type Props = NativeStackScreenProps<RootStackParamList, 'Game'>;

export default function FinishScreen({route,navigation}:Props) {
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const [max,setMax] = useState<number>(100);
  const [min,setMin] = useState<number>(1);
  const [results,setResults] = useState<number[]>([]);

  const numberToGuess = route.params.number;

  useEffect(() => {
    setRandomNumber(generateRandomBetween(min,max,numberToGuess));
  },[])

  useEffect(() => {
    if(randomNumber == numberToGuess){
      navigation.navigate("Finish", {steps:results, numberToGuess});
    }
  })

  const setNumber = (direction: string) => {
    let minBoundary = min;
    let maxBoundary = max;

    if(direction.toLowerCase()=="lower"){
      maxBoundary = randomNumber;
    }else{
      minBoundary = randomNumber+1;
    }

    setMin(minBoundary);
    setMax(maxBoundary);
    setRandomNumber(generateRandomBetween(minBoundary,maxBoundary,randomNumber));
    setResults(res => [...res,randomNumber]);
  }

  return (
    <SafeView>
      <View style={styles.titleView}>
        <Text style={styles.title}>{randomNumber}</Text>
      </View>
      <GameView style={styles.gamePadding}>
        <Text style={styles.subtitle}>Higher or lower?</Text>
        <ButtonView>
          <Button styleButton={styles.buttonStyle} onPress={()=>setNumber("Lower")}>
            <Ionicons style={styles.buttonTitle} name='remove'></Ionicons>
          </Button>
          <Button styleButton={styles.buttonStyle} onPress={()=>setNumber("Higher")}>
          <Ionicons style={styles.buttonTitle} name='add'></Ionicons>
          </Button>
        </ButtonView>
      </GameView>
      <View style={styles.resultsView}>
        <FlatList
          data={results}
          renderItem={({item,index}) => <View style={styles.resultsText} key={item}>
            <Text>#{index} The oponent guessed {item}</Text>
          </View>}
        />
      </View>
    </SafeView>
  )
}

const styles = StyleSheet.create({  
  titleView: {
    alignItems:"center",
    justifyContent:"center",
    flex:5,
  },
  title: {
    borderWidth:5,
    borderColor:"#ffd903",
    margin:20,
    paddingVertical:30,
    paddingHorizontal:100,
    fontSize:30,
    fontWeight:"bold",
    color: "#ffd903",
  },
  subtitle: {
    marginBottom:20,
    fontSize:20,
    fontWeight:"bold",
    color: "#d0b000",
    textAlign:"center"
  },
  buttonTitle: {
    fontSize:20,
    fontWeight:"light",
    color: "#ffffff"
  },
  buttonStyle: {
    paddingHorizontal:30
  },
  gamePadding: {
    marginHorizontal:20,
    flex:3,
  },
  resultsView:{
    flex:9
  },
  resultsText:{
    backgroundColor: "#ffd903",
    borderRadius:20,
    borderWidth:1,
    padding:10,
    borderColor:"black",
    marginVertical:10,
    marginHorizontal:4
  }
})