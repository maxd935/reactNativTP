import {Text, View} from 'react-native';
import React from 'react';

export default function CartMatchUser({ user }) {
  return (
    <View>{user ? <Text>{user.username} </Text> : <Text>User not found </Text>}</View>
  );
}
