import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

export default function Tela2({ navigation }) {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela 2</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite algo diferente"
        value={text}
        onChangeText={setText}
      />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    color: '#1976D2',
  },
  input: {
    borderWidth: 1,
    borderColor: '#90CAF9',
    padding: 8,
    width: 200,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
});