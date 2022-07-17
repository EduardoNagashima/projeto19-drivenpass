import { Request, Response } from "express";
import { createCardService, deleteCardService, getCardByIdService, getCardService } from "../services/cardService.js";

export function createCard(req: Request, res: Response) {
    const cardInfo = req.body;
    const user = res.locals;
    createCardService(cardInfo, user);
    res.sendStatus(201);
}

export async function getCard(req: Request, res: Response) {
    const user = res.locals;
    const { id } = req.params;
    let result;
    if (id) {
        result = await getCardByIdService(parseInt(id), user);
    } else {
        result = await getCardService(user);
    }
    return res.send(result);
}

export async function deleteCard(req: Request, res: Response) {
    const { id } = req.params;
    const user = res.locals;
    await deleteCardService(parseInt(id), user);
    return res.sendStatus(204);
}