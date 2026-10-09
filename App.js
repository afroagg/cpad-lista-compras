import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');
  const [itens, setItens] = useState([]);

  function adicionar() {
    if (texto === '') {
      return;
    }
    setItens([...itens, texto]);
    setTexto('');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.titulo}>Minha Lista de Compras</Text>
      <Text style={styles.subtitulo}>
        Adicione aqui as coisas que você precisa para a sua próxima compra :D
      </Text>

      <TextInput
        style={styles.input}
        placeholder="O que falta comprar?"
        value={texto}
        onChangeText={setTexto}
      />
      <TouchableOpacity style={styles.botao} onPress={adicionar}>
        <Text style={styles.textoBotao}>Adicionar</Text>
      </TouchableOpacity>

      <View style={styles.contador}>
        <Text style={styles.textoContador}>Itens na lista: {itens.length}</Text>
      </View>

      {itens.length === 0 && (
        <Text style={styles.vazio}>Ainda não tem nada por aqui...</Text>
      )}

      <FlatList
        style={styles.lista}
        data={itens}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.numero}>{index + 1}</Text>
            <Text style={styles.textoItem}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a1650',
    padding: 24,
    paddingTop: 70,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f3e8ff',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 14,
    color: '#c4a5f5',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 30,
  },
  input: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#3d2470',
    color: '#fff',
    borderBottomWidth: 3,
    borderColor: '#c084fc',
    borderRadius: 6,
    padding: 14,
    fontSize: 16,
  },
  botao: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#e879f9',
    borderRadius: 30,
    padding: 14,
    marginTop: 14,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#2a1650',
    fontWeight: 'bold',
    fontSize: 16,
  },
  contador: {
    backgroundColor: '#3d2470',
    borderRadius: 20,
    padding: 8,
    marginTop: 30,
    marginBottom: 14,
  },
  textoContador: {
    color: '#e9d5ff',
    fontSize: 14,
  },
  vazio: {
    color: '#9f7fd6',
    fontSize: 16,
    marginTop: 20,
  },
  lista: {
    width: '100%',
    maxWidth: 380,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3d2470',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
  },
  numero: {
    color: '#e879f9',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 14,
  },
  textoItem: {
    color: '#fff',
    fontSize: 16,
  },
});
