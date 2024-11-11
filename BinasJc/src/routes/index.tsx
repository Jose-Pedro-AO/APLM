import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import ProfileScreen from '../screens/ProfileScreen';
import CyclistsScreen from '../screens/CyclistsScreen';
import StationsScreen from '../screens/StationsScreen';
import ChatScreen from '../screens/ChatScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#FF7E79', // Cor vibrante para a aba ativa
        tabBarInactiveTintColor: '#8e8e93', // Cor suave para abas inativas
        tabBarShowLabel: false, // Esconde o rótulo, deixando só os ícones
        tabBarStyle: {
          height: 80,
          paddingBottom: 10,
          paddingTop: 10,
          borderTopWidth: 0,
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.12,
          shadowRadius: 10,
          elevation: 20,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Chat':
              iconName = 'chatbubbles';
              break;
            case 'Estações':
              iconName = 'bicycle';
              break;
            case 'Ciclistas':
              iconName = 'people';
              break;
            case 'Perfil':
              iconName = 'person';
              break;
            default:
              iconName = 'home';
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={color}
              style={{ paddingBottom: 5 }}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Estações" component={StationsScreen} />
      <Tab.Screen name="Ciclistas" component={CyclistsScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
