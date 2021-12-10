import React from 'react';
import ListMatches from "../components/List/ListMatches";

export default function listMatchesScreen({ navigation , route}) {
  return (
    <>
      <ListMatches navigation={navigation} username={route.params.username} jwtoken={route.params.jwtoken}/>
    </>
  );
}
