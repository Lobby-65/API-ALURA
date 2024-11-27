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
