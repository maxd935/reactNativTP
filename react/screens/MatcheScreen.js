import {Text} from 'react-native';
import React from 'react';
import Login from "../components/Login";
import ListMatches from "../components/Matches/ListMatches";
import CartMatch from "../components/Matches/CartMatch";

export default function MatcheScreen({route}) {
  return (
    <>
      <Text>Match</Text>
      <CartMatch match={route.params}/>
    </>
  );
}
