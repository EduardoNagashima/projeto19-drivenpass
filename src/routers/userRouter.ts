import { Router } from "express";
import { signUp } from "../controllers/userController.js";
import { signUpValidation } from "../middlewares/validationMiddleware.js";

const userRouter = Router();

userRouter.post('/signup', signUpValidation, signUp);

export default userRouter;