import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { DefaultTheme, NavigationContainer,Theme } from '@react-navigation/native'
import Categories from './screen/Categories';
import Meal from './screen/Meal';
import Recipe from './screen/Recipe';
import { Colors } from './utils/Colors';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favorites from './screen/Favorites';
import { Provider } from 'react-redux';
import store from './utils/redux/store';
import IconButton from './components/IconButton';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const theme: Theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background:Colors.primary1000,
    card: Colors.primary900,
    text: 'white',
    primary:'white'
  }
}

const DrawerNavigation = () => {
  return  <Drawer.Navigator 
              screenOptions={{
                headerTintColor:"white"
              }}
          >
    <Drawer.Screen name='Categories' component={Categories} options={{
      drawerIcon: ({color,size}) => <Ionicons name='list' color={color} size={size}/>
    }}/>
    <Drawer.Screen name='Favorites' component={Meal} 
    initialParams={{title:"Favorites", favorites:true}} options={{
      drawerIcon: ({color,size}) => <Ionicons name='star' color={color} size={size}/>
    }}/>
  </Drawer.Navigator>
}

export default function App() {
  return <>
    <Provider store={store}>
      <StatusBar style='light'/>
      <View style={styles.container}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator initialRouteName='Drawer' screenOptions={{headerBackTitle:"Back"}}>
            <Stack.Screen name='Drawer' component={DrawerNavigation} options={{headerShown:false}}/>
            <Stack.Screen name='Meal' component={Meal}/>
            <Stack.Screen name='Recipe' component={Recipe} options={{
              title:"About the meal",
              
            }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  </>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary1000
  },
});
