import { NextFunction, Request, Response } from "express";
import { credentialData } from "../services/credentialService.js";
import { noteData } from "../services/noteService.js";
import { userData } from "../services/userService.js";
import { credentialSchema, signUpSchema, wifiSchema, notesSchema, cardSchema } from "../utils/schemas.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { findByEmail } from "../repositories/userRepository.js";
import { cardData } from "../services/cardService.js";
import { wifiData } from "../services/wifiService.js";
dotenv.config();

export function signUpValidation(req: Request, res: Response, next: NextFunction) {
    const userInfo: userData = req.body;
    const { error } = signUpSchema.validate(userInfo);
    if (error) throw { type: 'BAD_REQUEST', message: error.details }
    next();
}

export function credentialValidation(req: Request, res: Response, next: NextFunction) {
    const credentialInfo: credentialData = req.body;
    const { error } = credentialSchema.validate(credentialInfo);
    if (error) throw { type: 'BAD_REQUEST', message: error.details }
    next();
}

export function notesValidation(req: Request, res: Response, next: NextFunction) {
    const notesInfo: noteData = req.body;
    const { error } = notesSchema.validate(notesInfo);
    if (error) throw { type: 'BAD_REQUEST', message: error.details }
    next();
}

export async function tokenValidation(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    const token = authorization.replace('Bearer ', "");
    if (!token || !authorization) throw { type: 'BAD_REQUEST', message: 'invalid token' };
    try {
        const { email } = jwt.verify(token, process.env.JWT_SECRET);
        const user = await findByEmail(email);
        res.locals = user;
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
    next();
}

export function cardValidation(req: Request, res: Response, next: NextFunction) {
    const cardInfo: cardData = req.body;
    const { error } = cardSchema.validate(cardInfo);
    if (error) throw { type: 'BAD_REQUEST', message: error.details };
    next();
}

export function wifiValidation(req: Request, res: Response, next: NextFunction) {
    const wifiInfo: wifiData = req.body;
    const { error } = wifiSchema.validate(wifiInfo);
    if (error) throw { type: 'BAD_REQUEST', message: error.details };
    next();
}