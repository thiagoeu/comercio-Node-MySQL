import UserShema from "../models/user.model";

export async function createUserController(req, res) {
  try {
    const { nome, email, password } = req.body;

    if (!nome || !email || !password) {
      return res.status(400).json({
        message: "Os campos nome, email e senha são obrigatórios",
        error: true,
        success: false,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
