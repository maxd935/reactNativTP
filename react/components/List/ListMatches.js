import { Alert, Button, FlatList, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import ListCartMatch from './ListCartMatch';
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import MatchContext from "../../context/MatchContext";

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

  const {selectorsUser} = useContext(UserContext);

  const {selectorsMatch, actionsMatch} = useContext(MatchContext);
  const matches = selectorsMatch.getMatches();


  useEffect(() => {
    //actions.loadMatches(selectors.getJwtoken()) && actions.loadMatches(selectors.getJwtoken());
    actionsMatch.loadMatches(selectorsUser.getJwtoken()) && actionsMatch.loadMatches(selectorsUser.getJwtoken());
  }, []);

  const handlePlay = () => () => {
    actionsMatch.playMatch(selectorsUser.getJwtoken(), navigation);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.user}>Player {selectorsUser.getUsername()}</Text>
      <FlatList
        style={styles.list}
        data={matches}
        renderItem={({item}) => (
          <ListCartMatch navigation={navigation} match={item} />
        )}
        keyExtractor={item => item._id}
      />
      <TouchableHighlight
        style={styles.touchable}
        onPress={handlePlay()}>
        <View style={styles.button}>
          <Text style={styles.text}>PLAY</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flew:1,
  },
  user: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    padding: 10,
  },
  list : {
    height: '75%',
  },
  touchable: {
    height: '18%',
    backgroundColor: "#fc7c13",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 5,
    margin: 5,
  },
  text: {
    color: "#000000",
    fontWeight: "bold",
    fontSize:40,
    letterSpacing:5,
  },
});
