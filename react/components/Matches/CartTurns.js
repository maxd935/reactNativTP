import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

export default function CartTurns({ turns, index, match }) {
  const colorUser = () => {
    if (match.user2 && match.user1){
      if (turns.winner === "user1") {
        return "#4362fc";
      } else if (turns.winner === "user2") {
        return "#fc4343";
      } else {
        return "#d2d2d2";
      }
    }
  };

  const winnerIs = (winner) => {
    if (match.user2 && match.user1){
      if (winner === "user1") {
        return match.user1.username;
      } else if (winner === "user2") {
        return match.user2.username;
      } else {
        return "Draw";
      }
    }
  };

  return (
    <View style={{
      backgroundColor: colorUser(), margin: 10,
      borderWidth: 1,
      padding: 10,
    }}>
      <Text>Tour n°{index + 1}</Text>
      {turns.user1 && <Text>{match.user1.username} : {turns.user1}</Text>}
      {turns.user2 && <Text>{match.user2.username} : {turns.user2}</Text>}
      {turns.winner && <Text>Winner : {winnerIs(turns.winner)}</Text>}
    </View>
  );
}


