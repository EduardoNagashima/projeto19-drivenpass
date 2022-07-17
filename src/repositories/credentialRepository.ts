import { User } from "@prisma/client";
import { credentialData } from "../services/credentialService.js";
import prisma from "./../config/database.js";

export async function verifyByName(name: string, user: User) {
    const result = await prisma.credential.findFirst({
        where: {
            AND: [
                { name },
                { userId: user.id }
            ]
        },
        include: { user: true }
    })
    return result;
}

export async function createCredential(credentialInfo: credentialData, user: User) {
    await prisma.credential.create({ data: { ...credentialInfo, userId: user.id } })
}

export async function getCredentialById(id: number, user: User) {
    const result = await prisma.credential.findMany({
        where: {
            AND: [
                { id },
                { userId: user.id }
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

export async function getCredentials(user: User) {
    const result = await prisma.credential.findMany({
        where: {
            userId: user.id
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
    const count = await prisma.credential.deleteMany({
        where: {
            AND: [
                { id },
                { userId: user.id }
            ]
        },
    });
    return count;
}