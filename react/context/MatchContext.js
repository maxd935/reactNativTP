import React, {createContext} from 'react';
import {Alert} from 'react-native';

const MatchContext = createContext({});

export const MatchProvider = function ({children}) {
  const [matches, setMatches] = React.useState([]);
  const [match, setMatch] = React.useState([]);

  const actionsMatch = {
    /*
  Recupere la liste de match disponible
  avec le Jwtoken
   */
    loadMatches: function (token) {
      console.log('UseContext loadMatches');
      fetch('http://fauques.freeboxos.fr:3000/matches', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setMatches(data);
        });
    },
    loadMatch: function (token, id) {
      console.log('UseContext loadMatch');
      fetch('http://fauques.freeboxos.fr:3000/matches/' + id, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
        .then(res => res.json())
        .then(data => {
          setMatch(data);
        });
    },
    playMatch: function (token, navigation) {
      console.log('UseContext playMatch');
      fetch('http://fauques.freeboxos.fr:3000/matches', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log(data);
          if (!data.match) {
            setMatch(data);
          }
          return data;
        })
        .then(data => {
          if (data.match) {
            Alert.alert(data.match);
          } else if (data.user2 && data.user1) {
            navigation.navigate('PlayMatchScreen', {
              data,
            });
          } else {
            navigation.navigate('WaitingPlayMatchScreen', {
              data,
            });
          }
        })
        .catch(error => {
          console.error(error);
        });
      // Event PLAYER_JOIN
    },
    playTurn: function (token, nbrTurn, choice, idMatch) {
      console.log('UseEffect Play ' + choice);
      fetch(
        'http://fauques.freeboxos.fr:3000/matches/' +
          idMatch +
          '/turns/' +
          nbrTurn,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
          body: JSON.stringify({
            move: choice,
          }),
        },
      )
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
    },
  };

  const selectorsMatch = {
    getMatches: function getMatches() {
      return matches;
    },
    getMatch: function getMatch() {
      return match;
    },
    getMatchesCount: function getMatchesCount() {
      return matches.length;
    },
  };

  return (
    <MatchContext.Provider value={{selectorsMatch, actionsMatch}}>
      {children}
    </MatchContext.Provider>
  );
};

export default MatchContext;
