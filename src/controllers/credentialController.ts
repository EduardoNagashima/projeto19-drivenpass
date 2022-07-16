import { Request, Response } from "express";
import { credentialData, create, getCredentialsService, getCredentialsByIdService, deleteCredentialService } from "../services/credentialService.js";

export async function credential(req: Request, res: Response) {
    const credentialInfo: credentialData = req.body;
    const user = res.locals;
    await create(credentialInfo, user);
    return res.sendStatus(201);
}

export async function getCredential(req: Request, res: Response) {
    const { id } = req.params;
    const user = res.locals;
    const credentials = await getCredentialsByIdService(parseInt(id), user);
    return res.send(credentials);
}

export async function getCredentials(req: Request, res: Response) {
    const user = res.locals;
    const credentials = await getCredentialsService(user);
    return res.send(credentials);
}

export async function deleteCredential(req: Request, res: Response) {
    const { id } = req.params;
    const user = res.locals;
    await deleteCredentialService(parseInt(id), user);
    res.sendStatus(204);
}