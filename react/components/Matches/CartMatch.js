import { Button, StyleSheet, Text, View } from "react-native";
import CartMatchUser from './CartMatchUser';
import React from 'react';

export default function CartMatch({ match, style, navigation }) {
  return (
    <View style={style ? style : styles.cart}>
      <Text>Match n°{match._id}</Text>
      <CartMatchUser user={match.user1} />
      <CartMatchUser user={match.user2} />
      <Text>Turn (List) : {match.turns}</Text>
      <Button title="Show" onPress={() => navigation.navigate('MatcheScreen', match )} />
    </View>
  );
}

const styles = StyleSheet.create({
  cart: {
    margin: 10,
    borderWidth: 5,
    padding: 10,
  },
});
