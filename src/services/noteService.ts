import { Note } from "@prisma/client";
import * as noteRepository from "../repositories/noteRepository.js";

export type noteData = Omit<Note, "id">

export async function createNoteService(noteInfo: noteData, user: any) {
    const hasTittle = await noteRepository.findByName(noteInfo.tittle);
    if (hasTittle) throw { type: 'CONFLICT', message: 'titulo já está em uso' };
    await noteRepository.create({ ...noteInfo, userId: user.id });
}

export async function getNoteByIdService(user, id: number) {
    return await noteRepository.findById(user, id);
}

export async function getNoteService(user) {
    return await noteRepository.find(user);
}

export async function deleteNoteService(user, id: number) {
    return await noteRepository.deleteNote(user, id);
}