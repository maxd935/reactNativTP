import React, {createContext} from 'react';
import { Alert } from "react-native";

const UserContext = createContext({});
const tokenAPI = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4NWJjYWVmYy0zMTRjLTRhODUtYjJhYS0xMjFkY2FmMjNkMjkiLCJ1c2VybmFtZSI6Im1heCIsImlhdCI6MTYzOTQwNDg4MSwiZXhwIjoxNjcwOTYyNDgxfQ.0f_qAXM5rSm9q65UbZS3hZCHt-bciUbYBX-St4rkBkY'


export const UserProvider = function ({children}) {
  const [jwtoken, setJwtoken] = React.useState('');
  const [username, setUsername] = React.useState('');

  const actionsUser = {
    loadJwtoken: function (NewUsername, navigation) {
      console.log('Use Context loadJwtoken');
      Alert.alert('Login  (POST /login)');
      fetch('http://fauques.freeboxos.fr:3000/login', {
        method: 'POST',
        headers: {
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
          console.log(tokenAPI);
          setJwtoken(tokenAPI);
          //setJwtoken(data.token);
        })
        .then(() => {
          navigation.navigate('listMatchesScreen');
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

  const selectorsUser = {
    getJwtoken: function getJwtoken() {
      console.log('getJwtoken');
      console.log(jwtoken);
      return jwtoken;
    },
    getUsername: function getUsername() {
      console.log('getUsername');
      console.log(username);
      return username;
    },
  };

  return (
    <UserContext.Provider value={{selectorsUser, actionsUser}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
