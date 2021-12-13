import React, { useContext } from "react";
import WaitingPlayMatch from "../components/PlayMatch/WaitingPlayMatch";

export default function WaitingPlayMatchScreen({navigation, route}) {
  return (
    <>
      <WaitingPlayMatch navigation={navigation} match={route.params.data} />
    </>
  );
}
