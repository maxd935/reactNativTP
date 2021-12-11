import React from 'react';
import ListMatches from "../components/List/ListMatches";

export default function listMatchesScreen({ navigation}) {
  return (
    <>
      <ListMatches navigation={navigation}/>
    </>
  );
}
