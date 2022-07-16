import { Request, Response } from "express";
import { createNoteService, noteData } from "../services/noteService.js"

export async function createNote(req: Request, res: Response) {
    const noteInfo: noteData = req.body;
    const user = res.locals;
    await createNoteService(noteInfo, user);
    res.sendStatus(201);
}

export async function getNote(req: Request, res: Response) {

}

export async function deleteNote(req: Request, res: Response) {

}