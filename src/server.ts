import app from "./app";
import mongoose from "mongoose";
import http from "http";
import dotenv from "dotenv";

dotenv.config();

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

if (!process.env.DATABASE_URL || !process.env.DATABASE_PASSWORD) {
  console.error("As variáveis de ambiente DATABASE_URL ou DATABASE_PASSWORD não foram definidas.");
  process.exit(1);
}

const DB = process.env.DATABASE_URL.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.set("strictQuery", true);

mongoose.connect(DB).then(() => {
  console.log("Conectado ao banco de dados");
}).catch((error) => {
  console.error("Erro ao conectar ao banco de dados:", error);
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
