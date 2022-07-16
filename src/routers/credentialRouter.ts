import { Router } from "express";
import { credential, getCredential } from "../controllers/credentialController.js";
import { credentialValidation, tokenValidation } from "../middlewares/validationMiddleware.js";

const credentialRouter = Router();

credentialRouter.use(tokenValidation);
credentialRouter.post('/credentials', credentialValidation, credential);
credentialRouter.get('/credentials/get/:id', getCredential);

export default credentialRouter;