import { Button, StyleSheet, Text, View } from "react-native";
import CartMatchUser from '../Matches/CartMatchUser';
import React from 'react';

export default function ListCartMatch({ match, navigation, jwtoken }) {
  return (
    <View style={styles.cart}>
      <Text>Match n°{match._id}</Text>
      <CartMatchUser user={match.user1} />
      <CartMatchUser user={match.user2} />
      <Button title="Show" onPress={() => navigation.navigate('MatcheScreen', { match, jwtoken } )} />
    </View>
  );
}

const styles = StyleSheet.create({
  cart: {
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
});
