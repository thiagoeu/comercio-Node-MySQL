import { Router } from "express";
import {
  createProdutoController,
  deleteProdutoController,
} from "../controllers/produto.controller.js";

const produtoRouter = Router();

produtoRouter.post(
  "/produtos/create",
  /* #swagger.tags = ['Produto']
     #swagger.description = 'Cria um novo produto' 
     #swagger.requestBody = {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/Produto" },
             examples: {
              default: {
                value: {
                  name: "PlayStation 5",
                  price: 4500,
                  description: "Console de última geração",
                  category: "eletrônicos",
                  product_stock: 50,
                  product_code: `PS5-${Date.now()}`
                }
              }
            }
          }
        }
      }
     #swagger.responses[201] = { description: "Produto criado com sucesso" }
     #swagger.responses[400] = { description: "Dados inválidos" }
     #swagger.responses[500] = { description: "Dados inválidos" }
  */ createProdutoController
);

produtoRouter.delete("produtos/:product_code", deleteProdutoController);

export default produtoRouter;
