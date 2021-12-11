import {Text, TextInput, View, StyleSheet, Button, Alert} from 'react-native';
import React, {useContext, useEffect} from 'react';
import UserContext from '../context/UserContext';

export default function Login({navigation}) {
  const [text, setText] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [jwtoken, setJwtoken] = React.useState('');


  const {actions, selectors} = useContext(UserContext);


  // Changer le username
  const handleButtonUsername = username => () => {
    actions.setUsername(username);
    setUsername(username);
  };

  /*
  Verifie si l'user est connecter
  Si oui redirection
   */
  useEffect(() => {
    if (selectors.getJwtoken().length > 0) {
      navigation.navigate('listMatchesScreen');
    }
  }, [jwtoken]);


  /*
  Verifie si l'user est modifier
  Si oui il charge un token de connexion
   */
  useEffect(() => {
    if (selectors.getUsername().length > 0) {
      actions.loadJwtoken(username);
      setJwtoken(selectors.getJwtoken());
    }
  }, [username]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Tape your Username"
      />
      <Button title="Submit" color="#9994ff" onPress={handleButtonUsername(text)} />
      {selectors.getUsername().length > 0 && (
        <Text style={styles.text}> Username is {selectors.getUsername()}</Text>
      )}
      <Button
        title="Go List matches (Facultatif)"
        color="#9999aa"
        onPress={() => navigation.navigate('listMatchesScreen')}
      />
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
