import { Request, Response } from "express";
import { signUpService } from "../services/userService.js";

export async function signUp(req: Request, res: Response) {
    const { email, password } = res.locals;
    await signUpService({ email, password });
    res.sendStatus(201);
}