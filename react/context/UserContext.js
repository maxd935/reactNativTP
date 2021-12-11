import React, {createContext} from 'react';
import { Alert } from "react-native";

const UserContext = createContext({});

export const UserProvider = function ({children}) {
  const [jwtoken, setJwtoken] = React.useState('');
  const [username, setUsername] = React.useState('');

  const actions = {
    loadJwtoken: function (NewUsername) {
      console.log('loadJwtoken');
      Alert.alert('Login  (POST /login)');
      fetch('http://fauques.freeboxos.fr:3000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: NewUsername}),
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
    },
    setUsername: function (NewUsername) {
      console.log('setUsername');
      setUsername(NewUsername);
    },
  };

  const selectors = {
    getJwtoken: function getJwtoken() {
      console.log('getJwtoken');
      return jwtoken;
    },
    getUsername: function getUsername() {
      console.log('getUsername');
      return username;
    },
  };

  return (
    <UserContext.Provider value={{selectors, actions}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
