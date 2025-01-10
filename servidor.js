import express from "express";
import routes from "./src/routes/postsRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000; 

// Inicializa o servidor Express
const app = express();
app.use(express.static("uploads"))
routes(app)

// Inicia o servidor na porta 3000
app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});

const renderItem = ({ item }) => (
    <Image
      source={item.origem === 'local' ? item.URL : { uri: item.URL }}
      style={styles.image}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
import { useState } from 'react';
import {  View,  Text,  TextInput,  TouchableOpacity,  FlatList,  StyleSheet, Button} from 'react-native';

const App = () => {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const addItem = () => {
    if (item.trim() !== '') {
      setList([...list, { id: Date.now().toString(), value: item }]);
      setItem('');
    }
  };

  const removeItem = (id) => {
    setList(list.filter((listItem) => listItem.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row", width:"100%"}}>
        <TextInput
          placeholder="Digite um item"
          value={item}
          onChangeText={setItem}
          style={styles.input}
        />
        <TouchableOpacity onPress={addItem}>
          <Text style={styles.botao}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listaItem}>
            <Text style={styles.textItem}>{item.value} - </Text>
            <TouchableOpacity onPress={() => removeItem(item.id)}>
              <Text style={{ color: 'red' }}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
        style={{ marginTop: 20, width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 20,
    flex: 1,

  },
  input: {
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    flex: 1,
  },
  botao: {
    height: "100%",
    width: "100%",
    backgroundColor: "blue",
    color: "white",
    padding: 10,
    borderRadius: 5,
  },
  listaItem: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#D3D3D3",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#484D50",
    width: "340px"
  },
  textItem: {
    fontSize: "30",
    fontWeight: "bold"
  },
});

export default App;
