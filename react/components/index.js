import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import listMatchesScreen from '../screens/ListMatchesScreen';
import CartMatch from "./Matches/CartMatch";

const Tab = createBottomTabNavigator();

export default function () {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="List Matches" component={listMatchesScreen} />
      <Tab.Screen name="Cart Match" component={CartMatch} />
    </Tab.Navigator>
  );
}
