import { Alert, Button, FlatList, StyleSheet, Text, View } from "react-native";
import ListCartMatch from './ListCartMatch';
import React, {useEffect, useState} from 'react';

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

export default function ListMatches({navigation, username, jwtoken}) {
  const [matchs, setMatchs] = useState([]);

  /*
  Recupere la liste de match disponible
  avec le Jwtoken
   */
  useEffect(() => {
    Alert.alert("List Matches  (GET /matches)")
    fetch('http://fauques.freeboxos.fr:3000/matches', {
      headers: {
        Authorization: 'Bearer '.jwtoken,
      },
    })
      .then(res => res.json())
      .then(data => {
        setMatchs(data);
      });
  }, [matchs]);

  return (
    <View>
      <Text style={styles.user}> Bienvenue {username} (jwtoken : {jwtoken})</Text>
      <Text> List DATA (Niv 1)</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <ListCartMatch navigation={navigation} style={styles.cart} match={item} />
        )}
        keyExtractor={item => item._id}
      />
      <Text> List Matchs API (Niv 2)</Text>
      <FlatList
        data={matchs}
        renderItem={({item}) => (
          <ListCartMatch navigation={navigation} style={styles.cart} match={item} />
        )}
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
  user: {
    textAlign: 'center',
    color: 'black',
    height: 40,
    padding: 10,
  },
});
