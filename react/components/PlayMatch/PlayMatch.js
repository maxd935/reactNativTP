import { Alert, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React, { useEffect } from "react";

export default function PlayMatch({ navigation, match, jwtoken }) {
  const [nbrTurns, setNbrTurns] = React.useState(1);

  /*
  Jouer le coup du match id
  au tour id
  avec le Jwtoken
   */
  const handlePlayChoix = (choix) => () => {
    console.log("UseEffect Play " + choix);
    Alert.alert("Play  (POST /matches/:id/turns/:idTurn)");
    fetch(
      "http://fauques.freeboxos.fr:3000/matches/" + match._id + "/turns/" + nbrTurns,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwtoken,
        },
        body: JSON.stringify({
          move: choix, // "rock", "paper", "scissors"
        }),
      },
    )
      .then(res => {
        res.json();
      })
      .then(data => {
        console.log("data is");
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
    setNbrTurns(nbrTurns + 1);
  };

  return (
    <>
      <View style={styles.container}>
        <Text>Tour n°{nbrTurns}</Text>
      </View>
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.touchable}
          onPress={
            handlePlayChoix('rock')
          }>
          <View style={styles.button}>
            <Text style={styles.text}>Pierre</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchable}
          onPress={
            handlePlayChoix("paper")
          }>
          <View style={styles.button}>
            <Text style={styles.text}>Feuille</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchable}
          onPress={
            handlePlayChoix("scissors")
          }>
          <View style={styles.button}>
            <Text style={styles.text}>Ciseaux</Text>
          </View>
        </TouchableHighlight>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  touchable: {
    backgroundColor: "orange",
  },
  button: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e07a26",
    padding: 10,
    margin: 10,
  },
  text: {
    fontSize: 40,
    color: "#000000",
  },
});
