import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function CartMatchUser({user, color}) {
  return (
    <View style={styles.container}>
      {user ? (
        <View style={styles.container}>
          <View
            style={{
              margin: 5,
              borderRadius: 10,
              height: 10,
              width: 10,
              backgroundColor: color,
            }}
          />
          <Text style={styles.text}>{user.username} </Text>
        </View>
      ) : (
        <Text style={styles.text}>User not found </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
