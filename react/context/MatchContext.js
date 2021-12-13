import React, { createContext } from "react";
import { Alert } from "react-native";

const MatchContext = createContext({});
const tokenAPI = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTA1ZTU0Ni1lZjBhLTQ5MzctOWQ2MS1hYzQxYjVlNTk0NzUiLCJ1c2VybmFtZSI6InRlc3QzIiwiaWF0IjoxNjM4OTYyODIzLCJleHAiOjE2NzA1MjA0MjN9.n2OQsc9ZhdioQ7QdZl-e0NJqQczpotCfKtLySQiP9ds'


export const MatchProvider = function({ children }) {
  const [matches, setMatches] = React.useState([]);
  const [match, setMatch] = React.useState([]);



  const actionsMatch = {
    /*
  Recupere la liste de match disponible
  avec le Jwtoken
   */
    loadMatches: function(token) {
      console.log("UseContext loadMatches");
      Alert.alert("List Matches  (GET /matches)");
      fetch("http://fauques.freeboxos.fr:3000/matches", {
        headers: {
          Authorization: "Bearer " + tokenAPI, //token,
        },
      })
        .then(res => res.json())
        .then(data => {
          setMatches(data);
        });
    },
    loadMatch: function(token, id) {
      console.log('UseContext loadMatch');
      Alert.alert('Matche  (GET /matches/:id)');
      fetch("http://fauques.freeboxos.fr:3000/matches/"+id, {
        headers: {
          Authorization: "Bearer " + tokenAPI, //token,
        },
      })
        .then(res => res.json())
        .then(data => {
          setMatch(data);
        });
    },
    playMatch: function(token, navigation) {
      console.log('UseContext playMatch');
      Alert.alert("Let's play (POST /matches)");
      fetch('http://fauques.freeboxos.fr:3000/matches', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + tokenAPI, //token,
        },
      })
        .then(res => {
          res.json();
        })
        .then(data => {
          setMatch(data);
          console.log(data)
          if (data.user2 && data.user1){
            navigation.navigate('PlayMatchScreen', {
              data
            });
          }
          else{
            navigation.navigate('WaitingPlayMatchScreen', {
              data
            });
          }
        })
        .catch(error => {
          console.error(error);
        });
      // Event PLAYER_JOIN
    },
  };

  const selectorsMatch = {
    getMatches: function getMatches() {
      return matches;
    },
    getMatchId: function getMatchId(id) {
      return matches.find((match) => id === match._id);
    },
    getMatch: function getMatch() {
      return match;
    },
    getMatchesCount: function getMatchesCount() {
      return matches.length;
    },
  };

  return (
    <MatchContext.Provider value={{ selectorsMatch, actionsMatch }}>
      {children}
    </MatchContext.Provider>
  );
};

export default MatchContext;
