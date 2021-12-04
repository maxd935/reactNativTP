import {Text, TextInput, View, StyleSheet} from 'react-native';
import React from 'react';

export default function Login() {
  const [text, setText] = React.useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        blurOnSubmit={true}
        placeholder="Tape your Username"
      />
      {text.length > 0 && <Text> Username : {text}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
