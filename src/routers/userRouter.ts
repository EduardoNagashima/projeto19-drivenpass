import { Router } from "express";
import { signIn } from "../controllers/userController.js";
import { signInValidation } from "../middlewares/validationMiddleware.js";

const userRouter = Router();

userRouter.post('/signin', signInValidation, signIn);

export default userRouter;