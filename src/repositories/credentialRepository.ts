import { Users } from "@prisma/client";
import { credentialData } from "../services/credentialService.js";
import prisma from "./../config/database.js";

export async function verifyByName(name: string, user: Users) {
    const result = await prisma.credentials.findFirst({
        where: {
            AND: [
                { name },
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

export async function getCredentialById(id: number, user: Users) {
    const result = await prisma.credentials.findMany({
        where: {
            AND: [
                { id },
                { usersId: user.id }
            ]
        },
        select: {
            name: true,
            url: true,
            username: true,
            password: true
        }
    });
    return result;
}

export async function getCredentials(user: Users) {
    const result = await prisma.credentials.findMany({
        where: {
            usersId: user.id
        },
        select: {
            name: true,
            url: true,
            username: true,
            password: true
        }
    })
    return result;
}

export async function deleteCredentialRepository(id: number, user) {
    const count = await prisma.credentials.deleteMany({
        where: {
            AND: [
                { id },
                { usersId: user.id }
            ]
        },
    });
    return count;
}