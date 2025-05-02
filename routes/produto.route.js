import { Router } from "express";
import {
  createProdutoController,
  deleteProdutoController,
} from "../controllers/produto.controller.js";

const produtoRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Produto:
 *       type: object
 *       required:
 *         - name
 *         - product_code
 *         - price
 *       properties:
 *         name:
 *           type: string
 *           example: "Paracetamol 500mg"
 *         product_code:
 *           type: string
 *           example: "PRD123"
 *         price:
 *           type: number
 *           example: 15.99
 */

/**
 * @swagger
 * /produtos:
 *   post:
 *     tags:
 *       - Produtos
 *     summary: Cria um novo produto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Produto'
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 */
produtoRouter.post("/cadastro", createProdutoController);

/**
 * @swagger
 * /produtos/{product_code}:
 *   delete:
 *     tags:
 *       - Produtos
 *     summary: Remove um produto pelo código
 *     parameters:
 *       - in: path
 *         name: product_code
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Produto removido com sucesso
 */
produtoRouter.delete("/:product_code", deleteProdutoController);

export default produtoRouter;
