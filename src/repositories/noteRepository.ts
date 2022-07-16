import { number } from "joi";
import prisma from "../config/database.js";
import { noteData } from "../services/noteService.js";

export async function create(noteInfo: noteData) {
    await prisma.note.create({ data: noteInfo });
}

export async function findByName(name: string) {
    return prisma.note.findFirst({ where: { tittle: name } });
}

export async function find(user) {
    return prisma.note.findMany({ where: { userId: user.id }, select: { id: true, tittle: true, annotation: true } })
}

export async function findById(user, id: number) {
    return prisma.note.findFirst({ where: { AND: [{ userId: user.id }, { id }] }, select: { id: true, tittle: true, annotation: true } })
}

export async function deleteNote(user, id: number) {
    return prisma.note.deleteMany({ where: { AND: [{ userId: user.id }, { id }] } })
}