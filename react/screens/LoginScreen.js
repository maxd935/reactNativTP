import {Text} from 'react-native';
import React from 'react';
import Login from "../components/Login";
export default function LoginScreen({ navigation }) {
  return (
    <>
      <Login navigation={navigation} />
    </>
  );
}
