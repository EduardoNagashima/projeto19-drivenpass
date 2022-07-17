import { Router } from "express";
import { create, deleteWifi, getWifi } from "../controllers/wifiController.js";
import { tokenValidation, wifiValidation } from "../middlewares/validationMiddleware.js";

const wifiRouter = Router();

wifiRouter.use(tokenValidation);
wifiRouter.post('/wifi', wifiValidation, create);
wifiRouter.get('/wifi/:id', getWifi)
wifiRouter.get('/wifi/', getWifi)
wifiRouter.delete('/wifi/:id', deleteWifi);

export default wifiRouter;