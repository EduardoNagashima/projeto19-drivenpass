import prisma from "../config/database.js";
import { userData } from "../services/userService.js";

export async function signInRepository(userInfos: userData) {
    await prisma.users.create({ data: userInfos })
}

export async function findByEmail(email: string) {
    return prisma.users.findFirst({ where: { email } });
}