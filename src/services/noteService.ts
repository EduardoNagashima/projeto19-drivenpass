import { Note } from "@prisma/client";

export type noteData = Omit<Note, "id" | "userId">

export async function createNoteService(noteInfo: noteData, user: any) {

}