import { Credentials } from "@prisma/client";
import { createCredential, verifyByName } from "../repositories/credentialRepository.js";

export type credentialData = Omit<Credentials, "id" | "usersId">

export async function create(credentialInfo: credentialData, user) {
    const nameAlreadyExist = await verifyByName(credentialInfo.name, user);
    if (nameAlreadyExist) throw { type: 'CONFLICT', message: 'Nome de credencial já utilizado.' }
    await createCredential(credentialInfo, user);
}
