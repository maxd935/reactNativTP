import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';

export default function PlayMatch({navigation, match}) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.touchable}
        onPress={() => {
          Alert.alert('Pierre');
        }}>
        <View style={styles.button}>
          <Text style={styles.text}>Pierre</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.touchable}
        onPress={() => {
          Alert.alert('Feuille');
        }}>
        <View style={styles.button}>
          <Text style={styles.text}>Feuille</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.touchable}
        onPress={() => {
          Alert.alert('Ciseaux');
        }}>
        <View style={styles.button}>
          <Text style={styles.text}>Ciseaux</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  touchable: {
    backgroundColor: 'orange',
  },
  button: {
    height: 100,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#e07a26",
    padding: 10,
    margin: 10,
  },
  text: {
    fontSize: 40,
    color: "#000000"
  }
});
