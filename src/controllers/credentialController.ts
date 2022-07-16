import { Request, Response } from "express";
import { credentialData, create, getCredentialsService } from "../services/credentialService.js";

export async function credential(req: Request, res: Response) {
    const credentialInfo: credentialData = req.body;
    const user = res.locals;
    await create(credentialInfo, user);
    return res.sendStatus(201);
}

export async function getCredential(req: Request, res: Response) {
    const { id } = req.params;
    const user = res.locals;
    const credentials = await getCredentialsService(parseInt(id), user);
    return res.send(credentials);
}