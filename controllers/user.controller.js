import UserSchema from "../models/user.model.js";
import bcrypt from "bcrypt";

import generatedAccessToken from "../utils/generateAccessToken.js";
import generatedRefreshToken from "../utils/generatedRefreshToken.js";

export async function createUserController(req, res) {
  try {
    // validação de dados para cadastro
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Os campos nome, email e senha são obrigatórios",
        error: true,
        success: false,
      });
    }
    // verificar se o usuario já possui cadastro
    const existingUser = await UserSchema.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({
        message: "Este email já  possui um cadastrado",
        error: true,
        success: false,
      });
    }

    // criptografar a senha
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //criar o usuario
    const payload = { name, email, password: hashedPassword };
    const user = await UserSchema.create(payload);

    return res.status(201).json({
      message: "Usuário criado com sucesso!",
      error: false,
      success: true,
      user,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message, error: true, success: false });
  }
}

export async function loginUserController(req, res) {
  try {
    // validação de dados
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Os campos email e senha são obrigatórios",
        error: true,
        success: false,
      });
    }

    // verificar se o usuario possui cadastro
    const user = await UserSchema.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({
        message: "Usuário não possui cadastrado",
        error: true,
        success: false,
      });
    }

    // verifica se o usurio está ativo
    if (user.status !== "Active") {
      return res.status(401).json({
        message: "Usuário inativo",
        error: true,
        success: false,
      });
    }

    // verificar se a senha esta correta
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Senha incorreta",
        error: true,
        success: false,
      });
    }

    // gerar o token
    const accessToken = await generatedAccessToken(user.id);
    const refreshToken = await generatedRefreshToken(user.id);

    const cookieOptions = {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    };

    res.cookie("accessToken", accessToken, cookieOptions);
    res.cookie("refreshToken", refreshToken, cookieOptions);

    return res.status(200).json({
      message: "Usuário logado com sucesso!",
      error: false,
      success: true,
      data: { accessToken, refreshToken },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message, error: true, success: false });
  }
}
