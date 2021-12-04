import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import CartMatch from './CartMatch';
import React from 'react';

const DATA = [
  {
    user1: {
      _id: '24aefbbb-8def-4e2c-b19a-929ff55020c0',
      username: 'player1',
    },
    user2: null, //{"_id": "24aefbbb-8def-4e2c-b19a-929ff55020c1","username":   "player2"}
    turns: [],
    _id: '1',
  },
  {
    user1: {
      _id: '24aefbbb-8def-4e2c-b19a-929ff55020c0',
      username: 'player1',
    },
    user2: null, //{"_id": "24aefbbb-8def-4e2c-b19a-929ff55020c1","username":   "player2"},
    turns: [],
    _id: '2',
  },
  {
    user1: {
      _id: '24aefbbb-8def-4e2c-b19a-929ff55020c0',
      username: 'player1',
    },
    user2: null, //{"_id": "24aefbbb-8def-4e2c-b19a-929ff55020c1","username":   "player2"},
    turns: [],
    _id: '3',
  },
  {
    user1: {
      _id: '24aefbbb-8def-4e2c-b19a-929ff55020c0',
      username: 'player1',
    },
    user2: {_id: '24aefbbb-8def-4e2c-b19a-929ff55020c1', username: 'player2'},
    turns: [],
    _id: '4',
  },
  {
    user1: {
      _id: '24aefbbb-8def-4e2c-b19a-929ff55020c0',
      username: 'player1',
    },
    user2: {_id: '24aefbbb-8def-4e2c-b19a-929ff55020c1', username: 'player2'},
    turns: [],
    _id: '5',
  },
  {
    user1: {
      _id: '24aefbbb-8def-4e2c-b19a-929ff55020c0',
      username: 'player1',
    },
    user2: {_id: '24aefbbb-8def-4e2c-b19a-929ff55020c1', username: 'player2'},
    turns: [],
    _id: '6',
  },
  {
    user1: {
      _id: '24aefbbb-8def-4e2c-b19a-929ff55020c0',
      username: 'player1',
    },
    user2: {_id: '24aefbbb-8def-4e2c-b19a-929ff55020c1', username: 'player2'},
    turns: [],
    _id: '7',
  },
];

export default function ListMatches({ navigation }) {
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={({item}) => <CartMatch navigation={navigation} style={styles.cart} match={item} />}
        keyExtractor={item => item._id}
      />
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
