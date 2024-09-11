import React from 'react';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#a62639' }}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          headerShown: false,
          tabBarLabel: 'List',
          tabBarIcon: ({ color }) => <Ionicons name="list-circle" size={30} color={color} />,
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          headerShown: false,
          tabBarLabel: 'Map',
          tabBarIcon: ({ color }) => <Ionicons name="map" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}