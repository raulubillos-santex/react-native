import { StyleSheet, Text, View, Dimensions } from 'react-native'
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
  return (
    <SafeView>
      <View style={styles.titleView}>
        <Text style={styles.title}>Guessing game</Text>
      </View>
      <View style={styles.menuView}>
        <Button styleButton={styles.buttonStyle} onPress={goStartGame}>
          <Text style={styles.buttonTitle}>Start</Text>
        </Button>
        <Button styleButton={styles.buttonStyle} onPress={goSummary}>
          <Text style={styles.buttonTitle}>Scoreboard</Text>
        </Button>
      </View>
    </SafeView>
  )
}

const device = Dimensions.get("screen");

const styles = StyleSheet.create({
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