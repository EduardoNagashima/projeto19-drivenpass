import { Request, Response } from "express";
import { createNoteService, deleteNoteService, getNoteByIdService, getNoteService, noteData } from "../services/noteService.js"

export async function createNote(req: Request, res: Response) {
    const noteInfo: noteData = req.body;
    const user = res.locals;
    await createNoteService(noteInfo, user);
    res.sendStatus(201);
}

export async function getNote(req: Request, res: Response) {
    const { id } = req.params;
    const user = res.locals;
    let result;
    if (id) {
        result = await getNoteByIdService(user, parseInt(id));
    } else {
        result = await getNoteService(user);
    }
    if (!result) throw { type: 'NOT_FOUND', message: 'Nota não encontrada' };
    res.send(result);
}

export async function deleteNote(req: Request, res: Response) {
    const { id } = req.params;
    const user = res.locals;
    const deleted = await deleteNoteService(user, parseInt(id));
    if (deleted.count === 0) throw { type: 'BAD_REQUEST', message: 'Nota já deletada ou inexistente' }
    res.sendStatus(204);
}