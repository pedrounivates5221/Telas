
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Tela1() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Simples</Text>
      <View style={styles.buttonWrap}>
        <Button title="Clique aqui" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#333',
	},
	buttonWrap: {
		marginTop: 24,
		width: '60%',
	},
});
