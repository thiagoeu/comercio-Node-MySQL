import UserSchema from "../models/user.model.js";
import bcrypt from "bcrypt";

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
