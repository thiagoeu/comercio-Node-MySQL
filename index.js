import express from "express";
import cors from "cors";

import produtoRouter from "./routes/produto.route.js";
import userRouter from "./routes/user.route.js";

import sequelize from "./config/dbConfig.js";

const app = express();

app.use(cors());

// Configurar o middleware para lidar com o corpo da requisição
app.use(express.json());

// Conectar ao banco de dados e iniciar o servidor
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
});

// Rotas
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/produtos", produtoRouter);
app.use("/api/usuarios", userRouter);
