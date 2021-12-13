import React, { useContext } from "react";
import WaitingPlayMatch from "../components/PlayMatch/WaitingPlayMatch";
import MatchContext from "../context/MatchContext";

export default function WaitingPlayMatchScreen({navigation, route}) {
  return (
    <>
      <WaitingPlayMatch navigation={navigation} match={route.params.match} />
    </>
  );
}
