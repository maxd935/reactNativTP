import React from 'react';
import Login from '../components/Login';
import { Text, View } from "react-native";
export default function LoginScreen({navigation}) {
  return (
    <>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize: 20}}>Welcome to</Text>
      <Text style={{fontSize: 30}}>CHI FOU MI</Text>
      </View>

      <Login navigation={navigation} />
    </>
  );
}
