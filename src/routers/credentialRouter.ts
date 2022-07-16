import { Router } from "express";
import { credential, getCredential, getCredentials, deleteCredential } from "../controllers/credentialController.js";
import { credentialValidation, tokenValidation } from "../middlewares/validationMiddleware.js";

const credentialRouter = Router();

credentialRouter.use(tokenValidation);
credentialRouter.post('/credentials', credentialValidation, credential);
credentialRouter.get('/credentials/get/:id', getCredential);
credentialRouter.get('/credentials/get/', getCredentials);
credentialRouter.delete('/credentials/:id/delete', deleteCredential);

export default credentialRouter;