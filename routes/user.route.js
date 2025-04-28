import { Router } from "express";
import {
  createUserController,
  loginUserController,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/cadastro", createUserController);
userRouter.post("/login", loginUserController);

export default userRouter;
