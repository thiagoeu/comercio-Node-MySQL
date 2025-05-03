import { Router } from "express";
import {
  createUserController,
  loginUserController,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/usuarios/register", createUserController);
userRouter.post("/usuarios/login", loginUserController);

export default userRouter;
