
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('despesas.db');
db.execSync(`
  PRAGMA journal_mode = WAL;
  CREATE TABLE IF NOT EXISTS despesas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    descricao TEXT NOT NULL,
    valor REAL NOT NULL
  );
`);

function getDespesas() {
  return db.getAllSync('SELECT * FROM despesas');
}

function insertDespesa(descricao, valor) {
  db.runSync('INSERT INTO despesas (descricao, valor) VALUES (?, ?)', [descricao, valor]);
}

export default function App() {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [despesas, setDespesas] = useState([]);

  function salvarDespesa() {
    const desc = descricao.trim();
    const val = parseFloat(valor);
    if (!desc || isNaN(val)) {
      Alert.alert('Preencha todos os campos corretamente!');
      return;
    }
    insertDespesa(desc, val);
    setDescricao("");
    setValor("");
    carregarDespesas();
  }

  function carregarDespesas() {
    setDespesas(getDespesas());
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Despesas</Text>
      <TextInput
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Descrição"
        style={estilos.campoTexto}
      />
      <TextInput
        value={valor}
        onChangeText={setValor}
        placeholder="Valor (ex: 12.50)"
        style={estilos.campoTexto}
        keyboardType="numeric"
      />
      <View style={estilos.botoes}>
        <Button title="Salvar" onPress={salvarDespesa} />
        <Button title="Carregar" onPress={carregarDespesas} />
      </View>
      <FlatList
        data={despesas}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Text style={estilos.textoItem}>
            {item.descricao} - R$ {item.valor.toFixed(2)}
          </Text>
        )}
        ListEmptyComponent={<Text style={estilos.vazio}>Nenhuma despesa cadastrada.</Text>}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  campoTexto: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 12, height: 44, marginBottom: 8 },
  botoes: { flexDirection: 'row', gap: 8, marginBottom: 16 },
  textoItem: { fontSize: 16, paddingVertical: 6 },
  vazio: { textAlign: 'center', color: '#888', marginTop: 20 },
// ...fim do arquivo...
});
