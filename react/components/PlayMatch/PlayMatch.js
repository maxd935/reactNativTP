import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import UserContext from '../../context/UserContext';
import MatchContext from '../../context/MatchContext';
import CartTurns from '../Matches/CartTurns';
import CartMatchUser from '../Matches/CartMatchUser';

export default function PlayMatch({match}) {
  const {selectorsUser} = useContext(UserContext);
  const {selectorsMatch, actionsMatch} = useContext(MatchContext);

  const matchId = selectorsMatch.getMatch();

  /*
    Recupere le match disponible à partir de l'id
    avec le Jwtoken
  */
  useEffect(() => {
    actionsMatch.loadMatch(selectorsUser.getJwtoken(), match._id) &&
      actionsMatch.loadMatch(selectorsUser.getJwtoken(), match._id);
  }, []);

  /*
  Jouer le coup du match id
  au tour id
  avec le Jwtoken
   */
  const handlePlayChoix = choix => () => {
    actionsMatch.playTurn(
      selectorsUser.getJwtoken(),
      matchId.turns.length + 1,
      choix,
      matchId._id,
    );
    handleActualise();
  };

  const handleActualise = () => () => {
    actionsMatch.loadMatch(selectorsUser.getJwtoken(), matchId._id) &&
      actionsMatch.loadMatch(selectorsUser.getJwtoken(), matchId._id);
  };

  const winnerIs = () => {
    if (matchId.turns.length === 3) {
      if (matchId.turns[2].winner) {
        return (
          <View
            style={{
              height: '30%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Match is finished</Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 30,
              }}>
              {matchId.winner ? 'Winner is ' + matchId.winner.username : 'DRAW'}
            </Text>
          </View>
        );
      }
    } else {
      return (
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
      );
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={{fontSize: 20}}>Match n°{matchId._id}</Text>
        <Text style={{fontSize: 15}}>
          Tour n°{matchId.turns.length === 0 ? 1 : matchId.turns.length}
        </Text>
        <View style={styles.users}>
          <CartMatchUser user={matchId.user1} color={'blue'} />
          <Text>VS</Text>
          <CartMatchUser user={matchId.user2} color={'red'} />
        </View>
        <FlatList
          style={{width: '50%', height: '30%'}}
          data={matchId.turns}
          renderItem={({item, index}) => (
            <CartTurns turns={item} index={index} match={matchId} />
          )}
        />
        <Button title="Actualiser le match" onPress={handleActualise()} />
      </View>
      {matchId.turns && winnerIs()}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  touchable: {
    backgroundColor: 'orange',
    width: '100%',
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
  users: {
    margin: 5,
    padding: 10,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
  },
});
