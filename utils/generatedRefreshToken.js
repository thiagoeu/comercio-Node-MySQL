import UserModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
import UserSchema from "../models/user.model.js";
dotenv.config();

const generatedRefreshToken = async (userId) => {
  const token = await jwt.sign({ id: userId }, process.env.JWT_SECRET_REFRESH, {
    expiresIn: "7d",
  });

  // atualizadno o refresh token
  const [updated] = await UserModel.update(
    { refresh_token: token }, // campo a ser atualizado
    { where: { id: userId } } // condição de atualização
  );

  // Retornando o token gerado
  if (updated) {
    return token;
  }

  throw new Error("Erro ao atualizar o refresh token");
};

export default generatedRefreshToken;
