import React from 'react';
import CartMatch from "../components/Matches/CartMatch";

export default function MatcheScreen({navigation, route}) {
  return (
    <>
      <CartMatch navigation={navigation} idMatch={route.params.match} />
    </>
  );
}
