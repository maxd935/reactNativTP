import {Button, Text, View} from 'react-native';
import React, { useContext, useEffect } from "react";
import MatchContext from "../../context/MatchContext";
import UserContext from "../../context/UserContext";

export default function WaitingPlayMatch({match, navigation}) {

  const {selectorsUser} = useContext(UserContext);
  const {selectorsMatch, actionsMatch} = useContext(MatchContext);
  const matchWaiting = selectorsMatch.getMatch();


  /*
    Recupere le match disponible à partir de l'id
    avec le Jwtoken
  */
  useEffect(() => {
    actionsMatch.loadMatch(selectorsUser.getJwtoken(), match._id) &&
    actionsMatch.loadMatch(selectorsUser.getJwtoken(), match._id);
  }, []);

  useEffect(() => {
    if (matchWaiting.user2 && matchWaiting.user1) {
      navigation.navigate('PlayMatchScreen', {
        matchWaiting,
      });
    }
  }, [match]);

  const handleActualise = () => () => {
    actionsMatch.loadMatch(selectorsUser.getJwtoken(), match._id) && actionsMatch.loadMatch(selectorsUser.getJwtoken(), match._id);
  };

  return (
    <View style={{display: 'flex', justifyContent: 'center'}}>
      <Text>Attente d'un autre joueur</Text>
      <Button title="Actualiser le match" onPress={handleActualise()} />
    </View>
  );
}
