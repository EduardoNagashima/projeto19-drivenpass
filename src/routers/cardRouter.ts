import { Router } from "express";
import { createCard, deleteCard, getCard } from "../controllers/cardController.js";
import { cardValidation, tokenValidation } from "../middlewares/validationMiddleware.js";

const cardRouter = Router();

cardRouter.use(tokenValidation);
cardRouter.post('/card', cardValidation, createCard);
cardRouter.get('/card', getCard);
cardRouter.get('/card/:id', getCard);
cardRouter.delete('/card/:id', deleteCard);
export default cardRouter;