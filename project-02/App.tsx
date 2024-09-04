import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SummaryScreen from './screens/SummaryScreen';
import {StartGameScreen} from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import FinishScreen from './screens/FinishScreen';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from './types/ParamList';
import EnterNumberScreen from './screens/EnterNumberScreen';

const image = {uri: './assets/background.png'};

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <>
      <StatusBar translucent={false}/>
        <SafeAreaProvider >
          <ImageBackground source={require('./assets/background.png')} style={style.image}>
            <LinearGradient colors={['#7609097a','#765d0979']} style={style.gradientStyle}>
              <View style={{flex:1}}>
                <NavigationContainer theme={navTheme} >
                  <Stack.Navigator initialRouteName='Start' screenOptions={{headerShown:false,}}>
                    <Stack.Screen name='Summary' component={SummaryScreen}/>
                    <Stack.Screen name='Start' component={StartGameScreen} />
                    <Stack.Screen name='Game' component={GameScreen}/>
                    <Stack.Screen name='Finish' component={FinishScreen}/>
                    <Stack.Screen name='EnterNumber' component={EnterNumberScreen}/>
                  </Stack.Navigator>
                </NavigationContainer> 
              </View>
            </LinearGradient>
          </ImageBackground>
        </SafeAreaProvider>
    </>
  );
}

const style = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  gradientStyle: {
    flex:1
  }
})