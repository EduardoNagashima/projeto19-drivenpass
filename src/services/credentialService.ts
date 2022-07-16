import { Credentials, Users } from "@prisma/client";
import { createCredential, verifyByName, getCredentialById, getCredentials, deleteCredentialRepository } from "../repositories/credentialRepository.js";
import Cryptr from "cryptr";
import dotenv from "dotenv";
dotenv.config();

export type credentialData = Omit<Credentials, "id" | "usersId">

export async function create(credentialInfo: credentialData, user) {
    const nameAlreadyExist = await verifyByName(credentialInfo.name, user);
    if (nameAlreadyExist) throw { type: 'CONFLICT', message: 'Nome de credencial já utilizado.' };
    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    const password = cryptr.encrypt(credentialInfo.password)
    credentialInfo = { ...credentialInfo, password }
    await createCredential(credentialInfo, user);
}

export async function getCredentialsByIdService(id: number, user) {
    const credentials = await getCredentialById(id, user);
    if (!credentials[0]) throw { type: 'UNAUTHORIZED', message: 'Credencial indisponível' }
    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    credentials[0].password = cryptr.decrypt(credentials[0].password)
    return credentials;
}

export async function getCredentialsService(user) {
    const credentials = await getCredentials(user);
    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    credentials.forEach(el => {
        el.password = cryptr.decrypt(el.password)
    })
    return credentials;
}

export async function deleteCredentialService(id: number, user) {
    const result = await deleteCredentialRepository(id, user);
    if (result.count === 0) throw { type: 'NOT_FOUND', message: 'Credencial inexistente na conta' }
}