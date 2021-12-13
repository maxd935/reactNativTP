import {Button, Text, View} from 'react-native';
import React, { useContext, useEffect } from "react";
import MatchContext from "../../context/MatchContext";
import UserContext from "../../context/UserContext";

export default function WaitingPlayMatch({match, navigation}) {

  const {selectorsUser} = useContext(UserContext);
  const {selectorsMatch, actionsMatch} = useContext(MatchContext);


  useEffect(() => {
    if (match.user2 && match.user1) {
      navigation.navigate('PlayMatchScreen', {
        match,
      });
    }
  }, [match]);

  const handleActualise = () => () => {
    actionsMatch.loadMatches(selectorsUser.getJwtoken()) && actionsMatch.loadMatches(selectorsUser.getJwtoken());
  };

  return (
    <View style={{display: 'flex', justifyContent: 'center'}}>
      <Text>Attente d'un autre joueur</Text>
      <Button title="Actualiser le match" onPress={handleActualise()} />
    </View>
  );
}
