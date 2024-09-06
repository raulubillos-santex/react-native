import { Alert, NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'
import { Button } from '../../components/Button'
import GameView from '../../components/GameView';
import ButtonView from '../../components/ButtonView';

interface Props {
  submitFunction: (number:number) => void
}

export default function InputSection({submitFunction}:Props) {
  const [ number, setNumber ] = useState<string>();

  const onChangeNumber = (number:string) => {
    setNumber(number);
  }

  const reset = () => {
    setNumber('');
  }

  const onSubmit = () => {
    if(number){
      const numberTransformed = Number.parseInt(number);
      if(numberTransformed.valueOf() <= 0 || numberTransformed.valueOf() > 99){
        emitInsultingButJustMessage(reset);
      }else{
        submitFunction(numberTransformed);
      }
    }
  }


  const dimension = useWindowDimensions();

  const isLandscape = dimension.height<dimension.width

  const styles = isLandscape? stylesLandscape:stylesPortrait;

  return (
    <GameView style={isLandscape&&stylesLandscape.gameView}>
        <View style={styles.inputSection}>
            <Text style={styles.subtitle}>Enter Number</Text>
            <TextInput inputMode='numeric' keyboardType='number-pad' value={number?.toString()} onChangeText={onChangeNumber} style={styles.input}/>
        </View>
        <ButtonView style={styles.buttonSection}>
          <Button>
              <Text style={styles.buttonTitle} onPress={reset}>Reset</Text>
          </Button>
          <Button disabled={!number} onPress={onSubmit}>
              <Text style={styles.buttonTitle}>Submit</Text>
          </Button>
        </ButtonView>
    </GameView>
  )
}

function emitInsultingButJustMessage(reset: () => void) {
  Alert.alert("The number should be between 0 and 99 you moron", "Same as the title idiot", [
    {
      text: "Ok, i'm a moron",
      isPreferred: true,
      onPress: () => reset()
    },
    {
      text: "No, i'm DIO",
      isPreferred: true,
      onPress: () => {
        Alert.alert("No, you are still an idiot", "yes", [
          {
            text: "Ok, i'm a moron",
            isPreferred: true,
            onPress: () => reset()
          },
        ]);
      }
    }
  ]);
}

const stylesLandscape = StyleSheet.create({
    gameView:{
      paddingHorizontal:0,
    },
    subtitle: {
      margin:10,
      textAlign:"center",
      textAlignVertical:"center",
      padding:10,
      fontSize:15,
      fontWeight:"600",
      color: "#ffff",
    },
    buttonTitle: {
      fontSize:20,
      fontWeight:"light",
      color: "#ffffff"
    },
    buttonStyle: {
      padding:10,
      flex:1
    },
    buttonSection:{
      flexDirection:"row",
      justifyContent:"space-around" 
    },
    inputSection: {
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      paddingHorizontal:40
    },
    input:{
      borderBottomColor:"#ffd903",
      borderBottomWidth:1,
      borderRadius:10,
      padding:10,
      marginBottom:20,
      width:90,
      textAlign:"center",
      fontSize:30,
      color:"#ffd903",
      fontWeight:"600"
    }
})

const stylesPortrait = StyleSheet.create({
  subtitle: {
    borderWidth:3,
    borderColor:"#ffff",
    margin:10,
    textAlign:"center",
    textAlignVertical:"center",
    padding:10,
    fontSize:15,
    fontWeight:"600",
    color: "#ffff",
  },
  buttonTitle: {
    fontSize:20,
    fontWeight:"light",
    color: "#ffffff"
  },
  buttonStyle: {
    padding:10
  },
  buttonSection:{
    flexDirection:"row",
    alignContent:"space-between",
    justifyContent:"space-around"
  },
  inputSection: {
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:40
  },
  input:{
    borderBottomColor:"#ffd903",
    borderBottomWidth:1,
    borderRadius:10,
    padding:10,
    marginBottom:20,
    width:90,
    textAlign:"center",
    fontSize:30,
    color:"#ffd903",
    fontWeight:"600"
  }
})

