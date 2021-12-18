import React, {createContext} from 'react';

const UserContext = createContext({});

export const UserProvider = function ({children}) {
  const [jwtoken, setJwtoken] = React.useState('');
  const [username, setUsername] = React.useState('');

  const actionsUser = {
    loadJwtoken: function (NewUsername, navigation) {
      fetch('http://fauques.freeboxos.fr:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: NewUsername}),
      })
        .then(res => {
          return res.json();
        })
        .then(data => {
          setJwtoken(data.token);
        })
        .then(() => {
          navigation.navigate('listMatchesScreen');
        })
        .catch(error => {
          console.error(error);
        });
    },
    setUsername: function (NewUsername) {
      setUsername(NewUsername);
    },
  };

  const selectorsUser = {
    getJwtoken: function getJwtoken() {
      return jwtoken;
    },
    getUsername: function getUsername() {
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
