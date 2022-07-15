import { Users } from "@prisma/client";
import { credentialData } from "../services/credentialService.js";
import prisma from "./../config/database.js";

export async function verifyByName(name: string, user: Users) {
    const result = await prisma.credentials.findFirst({
        where: {
            AND: [
                { name: name },
                { usersId: user.id }
            ]
        },
        include: { users: true }
    })
    return result;
}

export async function createCredential(credentialInfo: credentialData, user: Users) {
    await prisma.credentials.create({ data: { ...credentialInfo, usersId: user.id } })
}