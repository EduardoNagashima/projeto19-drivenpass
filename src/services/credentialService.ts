import { Credentials } from "@prisma/client";
import { createCredential, verifyByName, getCredentialById } from "../repositories/credentialRepository.js";
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

export async function getCredentialsService(id: number, user) {
    const credentials = await getCredentialById(id, user);
    console.log(credentials)
    return credentials;
}