import { Request, Response } from "express";
import { signInService } from "../services/userService.js";

export async function signIn(req: Request, res: Response) {
    const { email, password } = res.locals;
    await signInService({ email, password });
    res.sendStatus(201);
}