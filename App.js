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
      <StatusBar style="dark" />

      <Text style={styles.titulo}>🛒 Lista de Compras</Text>
      <Text style={styles.subtitulo}>
        Adicione aqui as coisas que você precisa para a sua próxima compra
      </Text>

      <View style={styles.linha}>
        <TextInput
          style={styles.input}
          placeholder="Digite um item"
          value={texto}
          onChangeText={setTexto}
        />
        <TouchableOpacity style={styles.botao} onPress={adicionar}>
          <Text style={styles.textoBotao}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.contador}>Itens na lista: {itens.length}</Text>

      <FlatList
        style={styles.lista}
        data={itens}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
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
    backgroundColor: '#f3e5f5',
    padding: 20,
    paddingTop: 60,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4a148c',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 14,
    color: '#7e57c2',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  linha: {
    flexDirection: 'row',
    marginBottom: 16,
    width: '100%',
    maxWidth: 450,
    alignSelf: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#b39ddb',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  botao: {
    backgroundColor: '#7b1fa2',
    borderRadius: 10,
    padding: 16,
    marginLeft: 8,
    justifyContent: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  contador: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#6a1b9a',
    marginBottom: 10,
    width: '100%',
    maxWidth: 450,
    alignSelf: 'center',
  },
  lista: {
    flex: 1,
    width: '100%',
    maxWidth: 450,
    alignSelf: 'center',
  },
  item: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#8e24aa',
  },
  textoItem: {
    fontSize: 16,
    color: '#333',
  },
});
