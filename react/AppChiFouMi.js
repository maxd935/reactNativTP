import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ListMatches from './components/Matches/ListMatches';
import Login from './components/Login';
import { Button, Text } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import listMatchesScreen from "./screens/ListMatchesScreen";
import CartMatch from "./components/Matches/CartMatch";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MatcheScreen from "./screens/MatcheScreen";

const Tab = createBottomTabNavigator();

export default function AppChiFouMi() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Login">
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="List Matches" component={listMatchesScreen} />
        <Tab.Screen name="MatcheScreen" component={MatcheScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
