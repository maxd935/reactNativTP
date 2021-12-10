import {Text, TextInput, View, StyleSheet, Button, Alert} from 'react-native';
import React, {useEffect} from 'react';

export default function Login({navigation}) {
  const [text, setText] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [jwtoken, setJwtoken] = React.useState('');

  /*
   Lorsque Username est remplit
   Il est soumis au serveur afin de récuperer un token de connexion
   */
  useEffect(() => {
    if (username.length <= 0) {
      console.log('Username Vide');
    } else {
      console.log('UseEffect Username');
      const obj = {username: username};
      console.log(JSON.stringify(obj));
      Alert.alert('Login  (POST /login)');

      // Probleme Fetch
      fetch('http://fauques.freeboxos.fr:3000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      })
        .then(res => {
          res.json();
        })
        .then(data => {
          console.log('data is');
          console.log(data);
          setJwtoken(data.token);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [username]);

  /*
   Lorsque Jwtoken est récuperer
   redirection sur List Matches
   */
  useEffect(() => {
    if (jwtoken.length <= 0) {
      console.log('jwtoken Vide');
    } else {
      console.log('UseEffect Jwtoken');
      navigation.navigate('listMatchesScreen', {
        jwtoken: jwtoken,
        username: username,
      });
    }
  }, [jwtoken]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Tape your Username"
      />
      <Button
        title="Continue"
        color="#9994ff"
        onPress={() => setUsername(text)}
      />
      {username.length > 0 && (
        <Text style={styles.text}> Username is {username}</Text>
      )}
      <Button
        title="Go List matches (Facultatif)"
        color="#9999aa"
        onPress={() =>
          navigation.navigate('listMatchesScreen', {
            jwtoken,
            username,
          })
        }
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
    height: 40,
    margin: 20,
    padding: 10,
  },
});
