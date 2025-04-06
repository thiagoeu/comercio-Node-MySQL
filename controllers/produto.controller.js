import Produto from "../models/produto.model.js";

export const createProdutoController = async (req, res) => {
  try {
    const {
      name,
      product_code,
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
      !product_code
    ) {
      return res
        .status(400)
        .json({ error: "Todos os campos são obrigatórios" });
    }

    const existingProduct = await Produto.findOne({
      where: { product_code },
    });

    if (existingProduct) {
      return res
        .status(400)
        .json({ error: "Já existe um produto com o mesmo código" });
    }

    const produto = await Produto.create({
      name,
      product_code,
      price,
      description,
      category,
      product_stock,
      requires_prescription,
    });

    res.json({
      message: "Produto cadastrado com sucesso!",
      error: false,
      sucecss: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message || error,
      error: true,
      sucecss: false,
    });
  }
};
