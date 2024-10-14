import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './pages/LoginScreen';
import HomeScreen from './pages/HomeScreen';
import ApplyLoanScreen from './pages/ApplyLoanScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ApplyLoan" component={ApplyLoanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
