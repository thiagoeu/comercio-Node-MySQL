import { Router } from "express";
import {
  createProdutoController,
  deleteProdutoController,
} from "../controllers/produto.controller.js";

const produtoRouter = Router();

produtoRouter.post(
  "/create",
  /* #swagger.tags = ['Produto'] 
  #swagger.path = '/api/produtos/create'
     #swagger.description = 'Cria um novo produto' 
     #swagger.requestBody = {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/Produto" },
            examples: {
              default: {
                summary: "Exemplo de produto",
                value: {
                  name: "PlayStation 5",
                  price: 4500,
                  description: "Console de última geração",
                  category: "eletrônicos",
                  product_stock: 50,
                  product_code: "PS5-" + Math.floor(Math.random() * 10000)
                }
              }
            }
          }
        }
      }
     #swagger.responses[201] = { 
        description: "Produto criado com sucesso",
     }
     #swagger.responses[400] = { 
        description: "Dados inválidos",
        
     }
     #swagger.responses[500] = { 
        description: "Erro interno", 
     }
  */
  createProdutoController
);

produtoRouter.delete(
  "/delete/:product_code",
  /* #swagger.tags = ['Produto']
     #swagger.path = '/api/produtos/delete/{product_code}'
     #swagger.description = 'Deleta um produto pelo código'
     #swagger.parameters['product_code'] = {
        in: 'path',
        description: 'Código único do produto',
        required: true,
        example: 'PS5-1234'
     }
     #swagger.responses[200] = { 
        description: "Produto deletado com sucesso",
     }
     #swagger.responses[404] = { 
        description: "Produto não encontrado",
        
     }
     #swagger.responses[500] = { 
        description: "Erro interno",
     }
  */
  deleteProdutoController
);

export default produtoRouter;
