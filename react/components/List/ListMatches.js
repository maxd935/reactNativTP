import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import ListCartMatch from './ListCartMatch';
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";

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
    turns: [
      {
        user2: 'rock',
        user1: 'rock',
        winner: 'draw',
      },
      {
        user1: 'rock',
      },
    ],
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
];

export default function ListMatches({navigation}) {
  const [matchs, setMatchs] = useState([]);

  const {selectors} = useContext(UserContext);

  /*
  Recupere la liste de match disponible
  avec le Jwtoken
   */
  useEffect(() => {
    console.log('UseEffect ListMatches');
    Alert.alert('List Matches  (GET /matches)');
    fetch('http://fauques.freeboxos.fr:3000/matches', {
      headers: {
        Authorization: 'Bearer ' + selectors.getJwtoken(),
      },
    })
      .then(res => res.json())
      .then(data => {
        setMatchs(data);
      });
  }, [matchs]);

  return (
    <View>
      <Text style={styles.user}>Bienvenue {selectors.getUsername()}</Text>
      <Text> List DATA (Niv 1)</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <ListCartMatch navigation={navigation} match={item} />
        )}
        keyExtractor={item => item._id}
      />
      <Text> List Matchs API (Niv 2)</Text>
      <FlatList
        data={matchs}
        renderItem={({item}) => (
          <ListCartMatch navigation={navigation} match={item} />
        )}
        keyExtractor={item => item._id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  user: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    padding: 10,
  },
});
