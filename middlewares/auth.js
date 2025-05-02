import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const auth = async (req, res, next) => {
  try {
    // Obtém o token do cookie ou do header de autorização
    const token =
      req.cookies.accessToken || req?.headers?.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Não autorizado - No token provided",
        error: true,
        success: false,
      });
    }
    const decode = await jwt.verify(token, process.env.JWT_SECRET);

    if (!decode) {
      return res.status(401).json({
        message: "Não autorizado - Invalid token",
        error: true,
        success: false,
      });
    }

    req.userId = decode.id; // Armazena o ID do usuário no objeto de requisição
    next(); // Chama o próximo middleware ou rota
  } catch (error) {
    return res.status(401).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export default auth;
