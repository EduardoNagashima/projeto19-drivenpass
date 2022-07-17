import { Request, Response } from "express";
import { createWifiService, deleteWifiService, getWifiByIdService, getWifiService } from "../services/wifiService.js";

export async function create(req: Request, res: Response) {
    const user = res.locals;
    const wifiInfo = req.body;
    await createWifiService({ ...wifiInfo, userId: user.id });
    res.sendStatus(201);
}

export async function deleteWifi(req: Request, res: Response) {
    const user = res.locals;
    const { id } = req.params;
    await deleteWifiService(parseInt(id), user);
    res.sendStatus(204);
}

export async function getWifi(req: Request, res: Response) {
    const { id } = req.params;
    const user = res.locals;
    let result;
    if (id) {
        result = await getWifiByIdService(parseInt(id), user);
    } else {
        result = await getWifiService(user);
    }
    return res.send(result);
}