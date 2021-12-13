import {Alert, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import UserContext from '../../context/UserContext';
import MatchContext from '../../context/MatchContext';

export default function PlayMatch({navigation, match}) {
  const [nbrTurns, setNbrTurns] = React.useState(1);

  const {selectorsUser} = useContext(UserContext);
  const {selectorsMatch, actionsMatch} = useContext(MatchContext);

  /*
  Jouer le coup du match id
  au tour id
  avec le Jwtoken
   */
  const handlePlayChoix = choix => () => {
    actionsMatch.playTurn(
      selectorsUser.getJwtoken(),
      nbrTurns,
      choix,
      match._id,
    );
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
          onPress={handlePlayChoix('rock')}>
          <View style={styles.button}>
            <Text style={styles.text}>Pierre</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchable}
          onPress={handlePlayChoix('paper')}>
          <View style={styles.button}>
            <Text style={styles.text}>Feuille</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchable}
          onPress={handlePlayChoix('scissors')}>
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
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  touchable: {
    backgroundColor: 'orange',
  },
  button: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e07a26',
    padding: 10,
    margin: 10,
  },
  text: {
    fontSize: 40,
    color: '#000000',
  },
});
