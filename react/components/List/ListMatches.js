import { Alert, Button, FlatList, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import ListCartMatch from './ListCartMatch';
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import MatchContext from "../../context/MatchContext";


export default function ListMatches({navigation}) {

  const {selectorsUser} = useContext(UserContext);

  const {selectorsMatch, actionsMatch} = useContext(MatchContext);
  const matches = selectorsMatch.getMatches();


  useEffect(() => {
    actionsMatch.loadMatches(selectorsUser.getJwtoken()) && actionsMatch.loadMatches(selectorsUser.getJwtoken());
  }, []);

  const handlePlay = () => () => {
    actionsMatch.playMatch(selectorsUser.getJwtoken(), navigation);
  };

  const handleActualise = () => () => {
    actionsMatch.loadMatches(selectorsUser.getJwtoken()) && actionsMatch.loadMatches(selectorsUser.getJwtoken());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.user}>Player {selectorsUser.getUsername()}</Text>
      <View>
        <Button title="Actualiser les matches" onPress={handleActualise()}/>
        <Text>Nbr matches {selectorsMatch.getMatchesCount()}</Text>
      </View>
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
    flex:1,
  },
  user: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    padding: 10,
  },
  list : {
    height: '70%',
  },
  touchable: {
    height: '15%',
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
