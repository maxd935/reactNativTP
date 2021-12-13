import React from 'react';
import CartMatch from "../components/Matches/CartMatch";

export default function MatcheScreen({navigation, route}) {
  console.log(route.params.match);
  return (
    <>
      <CartMatch navigation={navigation} idMatch={route.params.match} />
    </>
  );
}
