import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeView } from '../../components/SafeView';
import { Button } from '../../components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/ParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'Start'>;

export const StartGameScreen:React.FC<Props> = ({ navigation }:Props) => {
  const goStartGame = () => {
    navigation.navigate("EnterNumber");
  }
  const goSummary = () => {
    navigation.navigate("Summary");
  }

  const dimension = useWindowDimensions();

  const isLandscape = dimension.height<dimension.width


  return (
    <SafeView>
      <View style={isLandscape?stylesLandscape.titleView:stylesPortrait.titleView}>
        <Text style={isLandscape?stylesLandscape.title:stylesPortrait.title}>Guessing game</Text>
      </View>
      <View style={isLandscape?stylesLandscape.menuView:stylesPortrait.menuView}>
        <Button styleButton={isLandscape?stylesLandscape.buttonStyle:stylesPortrait.buttonStyle} onPress={goStartGame}>
          <Text style={isLandscape?stylesLandscape.buttonTitle:stylesPortrait.buttonTitle}>Start</Text>
        </Button>
        <Button styleButton={isLandscape?stylesLandscape.buttonStyle:stylesPortrait.buttonStyle} onPress={goSummary}>
          <Text style={isLandscape?stylesLandscape.buttonTitle:stylesPortrait.buttonTitle}>Scoreboard</Text>
        </Button>
      </View>
    </SafeView>
  )
}

const device = Dimensions.get("screen");

const stylesPortrait = StyleSheet.create({
  titleView: {
    alignItems:"center",
    justifyContent:"center",
    flex:1,
  },
  title: {
    borderWidth:5,
    borderColor:"#ffff",
    margin:device.width<380 ? 10:20,
    padding:device.width<380 ? 15:30,
    fontSize:30,
    fontWeight:"bold",
    color: "#ffff",
    maxWidth:"80%"
  },
  buttonTitle: {
    fontSize:20,
    fontWeight:"bold",
    color: "#ffffff"
  },
  menuView: {
    padding:20,
    justifyContent:"center",
    flex:3,
  },
  buttonStyle: {
    padding:10,
    margin:40
  },
})


const stylesLandscape = StyleSheet.create({
  titleView: {
    alignItems:"center",
    justifyContent:"center",
    flex:1,
  },
  title: {
    margin:device.height<380 ? 10:20,
    fontSize:30,
    fontWeight:"bold",
    color: "#ffff",
    maxWidth:"80%"
  },
  buttonTitle: {
    fontSize:20,
    fontWeight:"bold",
    color: "#ffffff"
  },
  menuView: {
    justifyContent:"center",
    flex:3,
  },
  buttonStyle: {
    padding:10,
    margin:20
  },
})