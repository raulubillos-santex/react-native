import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Tab from './components/Navigator';
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';
import {DefaultTheme, NavigationContainer, Theme} from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from './Constants';
import IconButton from './components/IconButton';
import { Provider } from 'react-redux';
import ReduxProvider from './components/ReduxProvider';

const RecentIcon = (props: {color:string, size:number}) => <Ionicons name='hourglass' {...props}/>

const AllExpensesIcon = (props: {color:string, size:number}) => <Ionicons name='calendar' {...props}/>

const theme: Theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background:Colors.colors.primary500,
    card: Colors.colors.primary400,
    border: Colors.colors.gray500,
    text: 'white',
    primary:'white'
  }
}

export default function App() {
  return (
    <>
      <StatusBar style='dark'/>
      <ReduxProvider>
        <NavigationContainer theme={theme}>
          <Tab.Navigator screenOptions={{
            headerRight:({pressColor}) => <IconButton color={"white"} icon='add' onPress={() => {}}/>
          }}>
            <Tab.Screen 
              name='RecentExpenses' 
              component={RecentExpenses} 
              options={
                {
                  tabBarLabel:"Recent",
                  tabBarIcon: ({color,size}) => <RecentIcon color={color} size={size}/>,
                  title:'Recent Expenses',
                  headerTitleAlign:"left",
                  tabBarActiveTintColor: Colors.colors.accent500,
                }
              }
            />
            <Tab.Screen name='AllExpenses' component={AllExpenses} options={
              {
                tabBarLabel:"All Expenses",
                tabBarIcon: ({color,size}) => <AllExpensesIcon color={color} size={size}/>,
                title:'All Expenses',
                headerTitleAlign:"center",
                tabBarActiveTintColor: Colors.colors.accent500
              }
            }/>  
          </Tab.Navigator>
        </NavigationContainer>
      </ReduxProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
