import React from 'react';
import CartMatch from "../components/Matches/CartMatch";

export default function MatcheScreen({navigation, route}) {
  return (
    <>
      <CartMatch navigation={navigation} match={route.params.match} jwtoken={route.params.jwtoken}/>
    </>
  );
}
