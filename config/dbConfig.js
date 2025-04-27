import { Sequelize } from "sequelize";

import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false, // Para não mostrar logs no console
  }
);

// Testar conexão
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conectado ao MySQL com Sequelize!");
  } catch (error) {
    console.error("❌ Erro ao conectar ao MySQL:", error.message);
  }
})();

export default sequelize;
