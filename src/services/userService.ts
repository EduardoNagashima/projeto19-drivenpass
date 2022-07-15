import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Users } from "@prisma/client";
import { findByEmail, signInRepository } from "../repositories/userRepository.js";

export type userData = Omit<Users, "id">

export async function signUpService(userInfos: userData) {
    userInfos.password = bcrypt.hashSync(userInfos.password, 10);
    const user = await findByEmail(userInfos.email);
    if (user) throw { type: 'CONFLICT', message: 'Email já cadastrado' }
    await signInRepository(userInfos);
}

export async function signInService(userInfos: userData) {
    const user = await findByEmail(userInfos.email);
    const validPassword = bcrypt.compareSync(userInfos.password, user.password)
    if (!validPassword || !user) throw { type: 'UNAUTHORIZED', message: 'Email ou senha invalidos' };

    console.log(jwt)

}