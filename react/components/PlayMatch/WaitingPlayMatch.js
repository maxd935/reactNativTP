import { Button, Text, View } from "react-native";
import React, { useEffect } from "react";


export default function WaitingPlayMatch({match, navigation}) {

  useEffect(() => {

    if (match.user2 && match.user1){
      navigation.navigate('PlayMatchScreen', {
        match
      });
    }
  }, [match]);

  return(
    <View>
      <Text>Attente d'un autre joueur</Text>
    </View>
  );

}
