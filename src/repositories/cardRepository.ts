import { number } from "joi";
import prisma from "../config/database.js";
import { cardData } from "../services/cardService.js";

export async function create(cardInfo: cardData) {
    await prisma.card.create({ data: cardInfo });
}

export async function findByTittle(tittle: string, userId: number) {
    return await prisma.card.findMany({ where: { AND: [{ tittle }, { userId }] } });
}

export async function find(user: any) {
    return await prisma.card.findMany({ where: { userId: user.id } });
}

export async function findById(id: number, user: any) {
    return await prisma.card.findFirst({ where: { AND: [{ id }, { userId: user.id }] } })
}

export async function deleteById(id: number, user: any) {
    return await prisma.card.deleteMany({ where: { AND: [{ id }, { userId: user.id }] } })
}