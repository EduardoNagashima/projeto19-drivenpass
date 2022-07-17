import { Wifi } from "@prisma/client";
import * as wifiRepository from "../repositories/wifiRepository.js";
import Cryptr from "cryptr";
import dotenv from "dotenv";
dotenv.config();

export type wifiData = Omit<Wifi, "id">

export async function createWifiService(wifiInfo: wifiData) {
    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    const cryptPassword = cryptr.encrypt(wifiInfo.password);
    await wifiRepository.create({ ...wifiInfo, password: cryptPassword });
}

export async function deleteWifiService(id: number, user: any) {
    const result = await wifiRepository.deleteWifi(id, user);
    if (result.count === 0) throw { type: 'NOT_FOUND', message: 'Wifi já excluido ou não existe' };
}

export async function getWifiByIdService(id: number, user: any) {
    const wifis = await wifiRepository.findById(user, id);
    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    wifis.password = cryptr.decrypt(wifis.password)
    return wifis;
}

export async function getWifiService(user: any) {
    const wifis = await wifiRepository.find(user);
    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    wifis.forEach(el => {
        el.password = cryptr.decrypt(el.password);
    })
    return wifis;
}