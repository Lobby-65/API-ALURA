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

           const App = () => {
  // Lista de imagens locais
  const images = [
    { id: '1', origem: 'local', URL: require('./assets/localImage1.jpg') },
    { id: '2', origem: 'local', URL: require('./assets/localImage2.jpg') },
    { id: '3', origem: 'local', URL: require('./assets/localImage3.jpg') },
    { id: '4', origem: 'local', URL: require('./assets/localImage4.jpg') },
    { id: '5', origem: 'local', URL: require('./assets/localImage5.jpg') },
    { id: '6', origem: 'local', URL: require('./assets/localImage6.jpg') },
    { id: '7', origem: 'local', URL: require('./assets/localImage7.jpg') },
    { id: '8', origem: 'local', URL: require('./assets/localImage8.jpg') },
    { id: '9', origem: 'local', URL: require('./assets/localImage9.jpg') },
    { id: '10', origem: 'local', URL: require('./assets/localImage10.jpg') },
  ];

  // Renderizador de itens
  const renderItem = ({ item }) => (
    <Image
      source={item.URL}
      style={styles.image}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={3} // Define 3 imagens por linha
      />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
});
