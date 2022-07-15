import bcrypt from "bcrypt";
import { User } from "@prisma/client";
import { findByEmail, signInRepository } from "../repositories/userRepository.js";

export type userData = Omit<User, "id">

export async function signInService(userInfos: userData) {
    userInfos.password = bcrypt.hashSync(userInfos.password, 10);
    const user = await findByEmail(userInfos.email);
    console.log(user)
    if (user) throw { type: 'CONFLICT', message: 'Email já cadastrado' }
    await signInRepository(userInfos);
}