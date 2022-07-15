import { NextFunction, Request, Response } from "express";
import { signUpSchema } from "../utils/schemas.js";

export function signUpValidation(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    const { error } = signUpSchema.validate(req.body);
    if (error) throw { type: 'BAD_REQUEST', message: error.details }
    res.locals = { email, password };
    next();
}