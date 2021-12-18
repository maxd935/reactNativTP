import {Text, TextInput, View, StyleSheet, Button, Alert} from 'react-native';
import React, {useContext, useEffect} from 'react';
import UserContext from "../context/UserContext";

export default function Login({navigation}) {
  const [text, setText] = React.useState('');
  const [username, setUsername] = React.useState('');

  const {actionsUser, selectorsUser} = useContext(UserContext);

  /*
  Verifie si l'user est modifier
  Si oui il charge un token de connexion
   */
  useEffect(() => {
    if (selectorsUser.getUsername().length > 0) {
      actionsUser.loadJwtoken(username, navigation);
    }
  }, [username]);


  // Changer le username
  const handleButtonUsername = username => () => {
    actionsUser.setUsername(username);
    setUsername(username);
  };

  return (
    <View style={styles.container}>
      <Text>Username</Text>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Tape your Username"
      />
      <Button title="Submit" color="#9994ff" onPress={handleButtonUsername(text)} />
      {selectorsUser.getUsername().length > 0 && (
        <Text style={styles.text}> Username is {selectorsUser.getUsername()}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    textAlign: 'center',
    color: 'black',
    height: 20,
    margin: 10,
  },
});
