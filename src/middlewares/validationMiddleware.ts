import { NextFunction, Request, Response } from "express";
import { signInSchema } from "../utils/schemas.js";

export function signInValidation(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    const { error } = signInSchema.validate(req.body);
    if (error) throw { type: 'BAD_REQUEST', message: error.details }
    res.locals = { email, password };
    next();
}