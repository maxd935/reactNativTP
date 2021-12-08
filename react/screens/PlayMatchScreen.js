import React from 'react';
import CartMatch from "../components/Matches/CartMatch";
import PlayMatch from "../components/PlayMatch/PlayMatch";

export default function PlayMatchScreen({navigation, route}) {
  return (
    <>
      <PlayMatch navigation={navigation} match={route.params.match}/>
    </>
  );
}
