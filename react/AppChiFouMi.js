import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import listMatchesScreen from "./screens/ListMatchesScreen";
import MatcheScreen from "./screens/MatcheScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlayMatchScreen from "./screens/PlayMatchScreen";
import { UserProvider } from "./context/UserContext";
import { MatchProvider } from "./context/MatchContext";

const Stack = createNativeStackNavigator();

export default function AppChiFouMi() {
  return (
    <UserProvider>
      <MatchProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ title: "Login" }}
            />
            <Stack.Screen
              name="listMatchesScreen"
              component={listMatchesScreen}
              options={{ title: "List matches", headerBackVisible: false }}
            />
            <Stack.Screen
              name="MatcheScreen"
              component={MatcheScreen}
              options={{ title: "Show Match" }}
            />
            <Stack.Screen
              name="PlayMatchScreen"
              component={PlayMatchScreen}
              options={{ title: "Play Match" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </MatchProvider>
    </UserProvider>
  );
}
