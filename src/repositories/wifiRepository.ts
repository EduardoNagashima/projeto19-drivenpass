import prisma from "../config/database.js";
import { wifiData } from "../services/wifiService.js";

export async function create(data: wifiData) {
    await prisma.wifi.create({ data })
}

export async function deleteWifi(id: number, user: any) {
    return await prisma.wifi.deleteMany({ where: { AND: [{ id }, { userId: user.id }] } });
}

export async function find(user: any) {
    return await prisma.wifi.findMany({ where: { userId: user.id } });
}

export async function findById(id: number, user: any) {
    return await prisma.wifi.findFirst({ where: { AND: [{ userId: user.id }, { id }] } })
}