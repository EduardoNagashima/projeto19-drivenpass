import { Request, Response } from "express";
import { credentialData, create } from "../services/credentialService.js";

export async function credential(req: Request, res: Response) {
    const credentialInfo: credentialData = req.body;
    const user = res.locals;
    await create(credentialInfo, user);
    return res.sendStatus(201);
}