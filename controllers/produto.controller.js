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

    // Verificar se o produto já existe
    const existingProduct = await Produto.findOne({
      where: { product_code },
    });

    if (existingProduct) {
      return res.status(400).json({
        message: "O produto já possui um cadastro com esse codigo",
        error: true,
        success: false,
      });
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
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const deleteProdutoController = async (req, res) => {
  try {
    const { product_code } = req.params;
    if (!product_code) {
      return res.status(400).json({
        message: "codigo do produto obrigatório",
        error: true,
        success: false,
      });
    }

    const produto = await Produto.findOne({ where: { product_code } });

    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    await produto.destroy();

    res.json({ message: "Produto deletado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message || error });
  }
};
