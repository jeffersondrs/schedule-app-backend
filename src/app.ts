import express from "express";

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Servidor conectado com sucesso, mais uma vez aqui");
});

export default app;
