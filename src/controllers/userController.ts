import { Request, Response } from "express";
import { signInService, signUpService } from "../services/userService.js";

export async function signUp(req: Request, res: Response) {
    const { email, password } = res.locals;
    await signUpService({ email, password });
    res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
    const { email, password } = res.locals;
    const token = await signInService({ email, password });
    res.status(200).send(token);
}