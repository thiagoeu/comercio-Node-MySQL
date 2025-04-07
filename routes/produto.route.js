import { Router } from "express";
import {
  createProdutoController,
  deleteProdutoController,
} from "../controllers/produto.controller.js";

const produtoRouter = Router();

produtoRouter.post("/cadastro", createProdutoController);
produtoRouter.delete("/delete/:product_code", deleteProdutoController);

export default produtoRouter;
