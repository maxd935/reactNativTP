import { Button, StyleSheet, Text, View } from "react-native";
import CartMatchUser from "../Matches/CartMatchUser";
import React from "react";

export default function ListCartMatch({ match, navigation }) {

  const winnerIs = () => {
    if (match.turns.length === 3) {
      if (match.turns[2].winner)
        return (
          <Text style={styles.winner}>{match.winner ? "Winner is " + match.winner.username : "DRAW"}</Text>);
    }
  }

  return (
    <View style={styles.cart}>
      <Text style={styles.titleMatch}>Match n°{match._id}</Text>
      <View style={styles.users}>
        <CartMatchUser user={match.user1} color={'blue'} />
        <Text>VS</Text>
        <CartMatchUser user={match.user2} color={'red'} />
      </View>
      { match.turns && winnerIs()}
      <Button title="Show" onPress={() => navigation.navigate("MatcheScreen", { match: match._id })} />
    </View>
  );
}

const styles = StyleSheet.create({
  cart: {
    alignContent: 'center',
    textAlign: 'center',
    margin: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor:'#dedede',
  },
  titleMatch: {
    textAlign: 'center'
  },
  winner: {
    textAlign: 'center',
  },
  users: {
    margin: 5,
    padding: 10,
    flexDirection:'row',
    alignContent: 'center',
    justifyContent: "space-around",
  },
});
