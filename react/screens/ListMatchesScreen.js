import {Text} from 'react-native';
import React from 'react';
import Login from "../components/Login";
import ListMatches from "../components/Matches/ListMatches";

export default function listMatchesScreen({ navigation , route}) {
  return (
    <>
      <ListMatches navigation={navigation} username={route.params.username} jwtoken={route.params.jwtoken}/>
    </>
  );
}
