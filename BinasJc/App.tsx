// src/App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import SignupScreen from './src/screens/SignupScreen';
import MapScreen from './src/screens/MapScreen';

import LoginScreen from './src/screens/LoginScreen';
import BottomTabNavigator from './src/routes';
import { View } from 'react-native';
import DestinationScreen from './src/components/DestinationScreen';
import ChatMessage from './src/components/Message';
import ChatScreen from './src/screens/ChatScreen';
import IniciateRide from './src/components/IniciateRide';
import RideScreen from './src/components/RideScreen';
import EndRideScreen from './src/components/EndRideScreen';
import EndRideDetailsScreen from './src/components/EndRideDetailsScreen';
import EditProfileScreen from './src/components/EditProfileScreen';
import RideHistoryScreen from './src/components/RideHistoryScreen';
import TermsAndConditionsScreen from './src/components/TermsAndConditionsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: 32 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Signup"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Termos" component={TermsAndConditionsScreen} />
          <Stack.Screen name="Historico" component={RideHistoryScreen} />
          <Stack.Screen name="EditarP" component={EditProfileScreen} />
          <Stack.Screen name="FimDeCorrida" component={EndRideDetailsScreen} />
          <Stack.Screen name="Fim" component={EndRideScreen} />
          <Stack.Screen name="Corrida" component={RideScreen} />
          <Stack.Screen name="Iniciar" component={IniciateRide} />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="Message" component={ChatMessage} />
          <Stack.Screen name="Destino" component={DestinationScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Main" component={BottomTabNavigator} />
        </Stack.Navigator>
        <StatusBar style="auto" backgroundColor="#F3F4F6" />
      </NavigationContainer>
    </View>
  );
}
