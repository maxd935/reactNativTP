import {Alert, Button, FlatList, StyleSheet, Text, View} from 'react-native';
import CartMatchUser from './CartMatchUser';
import React, { useContext, useEffect } from "react";
import CartTurns from './CartTurns';
import UserContext from "../../context/UserContext";

export default function CartMatch({match, navigation}) {
  const [boutonPlay, setBoutonPlay] = React.useState(null);
  const [matchApi, setMatchApi] = React.useState(match);

  const {selectors} = useContext(UserContext);


  /*
  Recupere le match disponible à partir de l'id
  avec le Jwtoken
   */
  useEffect(() => {
    console.log('UseEffect Matche');
    Alert.alert('Matche  (GET /matches/:id)');
    fetch('http://fauques.freeboxos.fr:3000/matches/' + match._id, {
      headers: {
        Authorization: 'Bearer ' + selectors.getJwtoken(),
      },
    })
      .then(res => res.json())
      .then(data => {
        setMatchApi(data);
      });
  }, [matchApi]);

  /*
  Verifie si la partie contient 2 users
  Si non Active le bouton pour jouer
   */
  useEffect(() => {
    if (matchApi.user2 && matchApi.user1) {
      console.log('Match en cours');
      setBoutonPlay(<Button title="Playing" disabled onPress={handlePlay()} />);
    } else {
      console.log("Match en attente d'un joueur");
      setBoutonPlay(<Button title="Play" onPress={handlePlay()} />);
    }
  }, [matchApi]);

  const handlePlay = () => () => {
    console.log('Play');
    Alert.alert("Let's play (POST /matches)");
    fetch('http://fauques.freeboxos.fr:3000/matches', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + selectors.getJwtoken(),
      },
    })
      .then(res => {
        res.json();
      })
      .then(data => {
        console.log('data is');
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
    // Event PLAYER_JOIN
    navigation.navigate('PlayMatchScreen', {
      match
    });
  };

  return (
    <View style={styles.cart}>
      <Text>Match n°{matchApi._id}</Text>
      <CartMatchUser user={matchApi.user1} />
      <CartMatchUser user={matchApi.user2} />
      <FlatList
        data={matchApi.turns}
        renderItem={({item, index}) => <CartTurns turns={item} index={index} />}
      />
      {boutonPlay}
    </View>
  );
}

const styles = StyleSheet.create({
  cart: {
    margin: 10,
    borderWidth: 5,
    padding: 10,
  },
});
