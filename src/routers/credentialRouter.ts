import { Router } from "express";
import { credential } from "../controllers/credentialController.js";
import { credentialValidation, tokenValidation } from "../middlewares/validationMiddleware.js";

const credentialRouter = Router();

credentialRouter.post('/credentials', tokenValidation, credentialValidation, credential);

export default credentialRouter;