import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

export default function CartTurns({turns, index }) {
  return (
    <View style={styles.cart}>
      <Text>Tour n°{index + 1}</Text>
      {turns.user1 && <Text>User1 : {turns.user1}</Text>}
      {turns.user2 && <Text>User2 : {turns.user2}</Text>}
      {turns.winner && <Text>Winner : {turns.winner}</Text>}
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
