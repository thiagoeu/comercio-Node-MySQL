import express from "express";
import cors from "cors";

// rotas
import produtoRouter from "./routes/produto.route.js";
import userRouter from "./routes/user.route.js";

// Configuracoes
import sequelize from "./config/dbConfig.js";

//swagger
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger_output.json" assert { type: "json" };

const app = express();

app.use(cors());

// Configurar o middleware para lidar com o corpo da requisição
app.use(express.json());

//swagger UI
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Conectar ao banco de dados e iniciar o servidor
sequelize.sync({ force: false }).then(() => {
  app.listen(3000, () => {
    console.log("API documentation: http://localhost:3000/api-doc");
  });
});

// Rotas
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", produtoRouter);
app.use("/api/usuarios", userRouter);
