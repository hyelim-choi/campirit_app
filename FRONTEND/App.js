import { StatusBar } from 'expo-status-bar';
import React, { useState,} from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainPage from './screens/MainPage.js';
import StartPage from './screens/StartPage.js';
import QuizStart from './screens/QuizPages/QuizStart.js';
import QuizSituation from './screens/QuizPages/QuizSituation.js';
import Quiz1 from './screens/QuizPages/Quiz1.js';
import Quiz2 from './screens/QuizPages/Quiz2.js';
import Quiz3 from './screens/QuizPages/Quiz3.js';
import Quiz4 from './screens/QuizPages/Quiz4.js';
import Quiz5 from './screens/QuizPages/Quiz5.js';
import Quiz6 from './screens/QuizPages/Quiz6.js';
import Quiz7 from './screens/QuizPages/Quiz7.js';
import Quiz8 from './screens/QuizPages/Quiz8.js';
import Quiz9 from './screens/QuizPages/Quiz9.js';
import Quizf from './screens/QuizPages/Quizf.js';
import MakeKit_Tent from './screens/MakeKit/MakeKit_Tent.js';
import MakeKit_Tarp from './screens/MakeKit/MakeKit_Tarp.js';
import MakeKit_Tarp_NoCar from './screens/MakeKit/MakeKit_Tarp_NoCar.js';
import MakeKit_Mat from './screens/MakeKit/MakeKit_Mat.js';
import MakeKit_Table from './screens/MakeKit/MakeKit_Table.js';
import MakeKit_Chair from './screens/MakeKit/MakeKit_Chair.js';
import MakeKit_Heater_Energy from './screens/MakeKit/MakeKit_Heater_Energy.js';
import MakeKit_Heater_NoEnergy from './screens/MakeKit/MakeKit_Heater_NoEnergy.js';
import MakeKit_Cooler_Energy from './screens/MakeKit/MakeKit_Cooler_Energy.js';
import MakeKit_Cooler_NoEnergy from './screens/MakeKit/MakeKit_Cooler_NoEnergy';
import MakeKit_Etc from './screens/MakeKit/MakeKit_Etc.js';
import MakeKit_Kitc from './screens/MakeKit/MakeKit_Kitc.js';
import MakeKit_Setiment from './screens/MakeKit/MakeKit_Setiment.js';
import MakeKit_Box from './screens/MakeKit/MakeKit_Box.js';


const Stack = createNativeStackNavigator();

export default function App() {
  const[ansList, setansList] = useState(
    {
      A1:"",
      A2:"",
      A3:"",
      A4:0,
      A5:0,
      A6:0,
      A7:0,
      A8:0,
      A9:0,
      Af:0,
    });

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="StartPage">
          
        <Stack.Screen name="QuizStart" component={QuizStart} options={{ headerShown: false }}/>
        <Stack.Screen name="QuizSituation" options={{ headerShown: false }} children={
          ({navigation}) => <QuizSituation navigation={navigation} ansList={ansList}/>
          }/>
        <Stack.Screen name= "Quiz1" options={{ headerShown: false }} children={
          ({navigation}) => <Quiz1 navigation={navigation} ansList={ansList} setansList={setansList}/>
          }/>
        <Stack.Screen name="Quiz2" options={{ headerShown: false }}children={
          ({navigation}) => <Quiz2 navigation={navigation} ansList={ansList} setansList={setansList}/>
          }/>
        <Stack.Screen name="Quiz3" options={{ headerShown: false }}children={
          ({navigation}) => <Quiz3 navigation={navigation} ansList={ansList} setansList={setansList}/>
          }/>
        <Stack.Screen name="Quiz4" options={{ headerShown: false }}children={
          ({navigation}) => <Quiz4 navigation={navigation} ansList={ansList} setansList={setansList}/>
          }/>
        <Stack.Screen name="Quiz5" options={{ headerShown: false }}children={
          ({navigation}) => <Quiz5 navigation={navigation} ansList={ansList} setansList={setansList}/>
          }/>
        <Stack.Screen name="Quiz6" options={{ headerShown: false }}children={
          ({navigation}) => <Quiz6 navigation={navigation} ansList={ansList} setansList={setansList}/>
          }/>
        <Stack.Screen name="Quiz7" options={{ headerShown: false }}children={
          ({navigation}) => <Quiz7 navigation={navigation} ansList={ansList} setansList={setansList}/>
          }/>
        <Stack.Screen name="Quiz8" options={{ headerShown: false }}children={
          ({navigation}) => <Quiz8 navigation={navigation} ansList={ansList} setansList={setansList}/>
          }/>
        <Stack.Screen name="Quiz9" options={{ headerShown: false }}children={
          ({navigation}) => <Quiz9 navigation={navigation} ansList={ansList} setansList={setansList}/>
          }/>
        <Stack.Screen name="Quizf" options={{ headerShown: false }}children={
          ({navigation}) => <Quizf navigation={navigation} ansList={ansList} setansList={setansList}/>
          }/>
          <Stack.Screen name="MakeKit_Tent" options={{ headerShown: false }}children={
          ({navigation}) => <MakeKit_Tent navigation={navigation} ansList={ansList} />
          }/>
        <Stack.Screen name="MakeKit_Tarp" component={MakeKit_Tarp} options={{ headerShown: false }} />
        <Stack.Screen name="MakeKit_Tarp_NoCar" component={MakeKit_Tarp_NoCar} options={{ headerShown: false }} />
        <Stack.Screen name="MakeKit_Mat" component={MakeKit_Mat} options={{ headerShown: false }} />
        <Stack.Screen name="MakeKit_Table" component={MakeKit_Table} options={{ headerShown: false }} />
        <Stack.Screen name="MakeKit_Chair" component={MakeKit_Chair} options={{ headerShown: false }} />
        <Stack.Screen name="MakeKit_Heater_Energy" component={MakeKit_Heater_Energy} options={{ headerShown: false }} />
        <Stack.Screen name="MakeKit_Heater_NoEnergy" component={MakeKit_Heater_NoEnergy} options={{ headerShown: false }} />
        <Stack.Screen name="MakeKit_Cooler_Energy" component={MakeKit_Cooler_Energy} options={{ headerShown: false }} />
        <Stack.Screen name="MakeKit_Cooler_NoEnergy" component={MakeKit_Cooler_NoEnergy} options={{ headerShown: false }} />
        <Stack.Screen name="MakeKit_Etc" component={MakeKit_Etc} options={{ headerShown: false }} />
        <Stack.Screen name="MakeKit_Kitc" component={MakeKit_Kitc} options={{ headerShown: false }} />
        <Stack.Screen name="MakeKit_Setiment" component={MakeKit_Setiment} options={{ headerShown: false }} />
        <Stack.Screen name="MakeKit_Box" component={MakeKit_Box} options={{ headerShown: false }} />

        <Stack.Screen name="StartPage" component={StartPage} options={{ headerShown: false }} />
        <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }}/>
        </Stack.Navigator>
        <StatusBar></StatusBar>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray'
  },
});