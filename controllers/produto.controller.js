import e from "cors";
import Produto from "../models/produto.model.js";

export const createProdutoController = async (req, res) => {
  try {
    const {
      name,
      price,
      description,
      category,
      product_stock,
      requires_prescription,
    } = req.body;

    if (
      !name ||
      !price ||
      !description ||
      !category ||
      !product_stock ||
      !requires_prescription
    ) {
      return res
        .status(400)
        .json({ error: "Todos os campos são obrigatórios" });
    }

    const produto = await Produto.create({
      name,
      price,
      description,
      category,
      product_stock,
      requires_prescription,
    });

    res.json(produto);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message || error,
      error: true,
      sucecss: false,
    });
  }
};
