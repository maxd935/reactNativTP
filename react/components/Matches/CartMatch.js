import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import CartMatchUser from './CartMatchUser';
import React, {useEffect} from 'react';

export default function CartMatch({match, style, navigation}) {
  const [boutonPlay, setboutonPlay] = React.useState(null);

  /*
  Verifie si la partie contient 2 users
  Si non Active le bouton pour jouer
   */
  useEffect(() => {
    if ((match.user2 && match.user1)) {
      setboutonPlay(
        <Button
          title="Play"
          disabled
          onPress={handlePlay()}
        />,
      );
    }
    else{
      setboutonPlay(
        <Button
          title="Play"
          onPress={handlePlay()}
        />,
      );
    }
  }, []);


  const handlePlay = () => () => {
    Alert.alert("Let's play (POST /matches)");
    fetch('http://fauques.freeboxos.fr:3000/matches', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.status === 201)
      .then(res => {
        res.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
    // Event PLAYER_JOIN
    navigation.navigate('PlayMatchScreen', {
      match: match,
    });
  };

  return (
    <View style={style ? style : styles.cart}>
      <Text>Match n°{match._id}</Text>
      <CartMatchUser user={match.user1} />
      <CartMatchUser user={match.user2} />
      <Text>Turn (List) : {match.turns}</Text>
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
