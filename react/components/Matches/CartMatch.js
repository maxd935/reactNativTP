import {Alert, Button, FlatList, StyleSheet, Text, View} from 'react-native';
import CartMatchUser from './CartMatchUser';
import React, {useContext, useEffect} from 'react';
import CartTurns from './CartTurns';
import UserContext from '../../context/UserContext';
import MatchContext from '../../context/MatchContext';

export default function CartMatch({idMatch, navigation}) {
  const [boutonPlay, setBoutonPlay] = React.useState(null);

  const {selectorsUser} = useContext(UserContext);

  const {actionsMatch, selectorsMatch} = useContext(MatchContext);
  const matchId = selectorsMatch.getMatch();

  /*
    Recupere le match disponible à partir de l'id
    avec le Jwtoken
  */
  useEffect(() => {
    actionsMatch.loadMatch(selectorsUser.getJwtoken(), idMatch) &&
      actionsMatch.loadMatch(selectorsUser.getJwtoken(), idMatch);
  }, []);

  /*
  Verifie si la partie contient 2 users
  Si non Active le bouton pour jouer
   */
  useEffect(() => {
    console.log(matchId);
    if (matchId){
      if (matchId.turns.length === 3) {
        setBoutonPlay(<Button title="Finish" disabled onPress={handlePlay()} />);
      } else if (matchId.user2 && matchId.user1) {
        setBoutonPlay(<Button title="Playing" disabled onPress={handlePlay()} />);
      } else {
        setBoutonPlay(<Button title="Waiting player" disabled onPress={handlePlay()} />);
      }
    }
  }, [matchId]);

  const handlePlay = () => () => {
    actionsMatch.playMatch(selectorsUser.getJwtoken(), navigation);
  };

  return (
    <View style={styles.cart}>
      <Text style={styles.titleMatch}>Match n°{matchId._id}</Text>
      <View style={styles.users}>
        <CartMatchUser user={matchId.user1} color={'blue'} />
        <Text>VS</Text>
        <CartMatchUser user={matchId.user2} color={'red'} />
      </View>
      <FlatList
        data={matchId.turns}
        renderItem={({item, index}) => (
          <CartTurns turns={item} index={index} match={matchId} />
        )}
      />
      {matchId.winner && (
        <Text style={styles.winner}>Result is {matchId.winner}</Text>
      )}
      {boutonPlay}
    </View>
  );
}

const styles = StyleSheet.create({
  cart: {
    alignContent: 'center',
    textAlign: 'center',
    margin: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#dedede',
  },
  titleMatch: {
    textAlign: 'center',
  },
  winner: {
    textAlign: 'center',
    textDecoration: 'overline',
  },
  users: {
    margin: 5,
    padding: 10,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
  },
});
