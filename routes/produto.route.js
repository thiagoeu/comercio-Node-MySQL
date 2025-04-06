import { Router } from "express";
import { createProdutoController } from "../controllers/produto.controller.js";
const produtoRouter = Router();

produtoRouter.post("/cadastro", createProdutoController);

export default produtoRouter;
