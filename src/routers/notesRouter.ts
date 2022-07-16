import { Router } from "express";

import { createNote, getNote, deleteNote } from "../controllers/notesController.js";
import { notesValidation, tokenValidation } from "../middlewares/validationMiddleware.js";

const notesRouter = Router();

notesRouter.use(tokenValidation);
notesRouter.post('/notes', notesValidation, createNote)
notesRouter.get('/notes', getNote)
notesRouter.delete('/notes/:id', deleteNote)

export default notesRouter;