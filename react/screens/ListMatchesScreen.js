import {Text} from 'react-native';
import React from 'react';
import Login from "../components/Login";
import ListMatches from "../components/Matches/ListMatches";

export default function listMatchesScreen({ navigation }) {
  return (
    <>
      <Text>List des matchs</Text>
      <ListMatches navigation={navigation}/>
    </>
  );
}
