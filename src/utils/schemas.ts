import Joi, { ObjectSchema } from "joi";
import { userData } from "../services/userService.js";
import { credentialData } from "../services/credentialService.js";

export const signUpSchema: ObjectSchema<userData> = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required()
})

export const credentialSchema: ObjectSchema<credentialData> = Joi.object({
    name: Joi.string().required(),
    url: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required()
})

export const notesSchema: ObjectSchema = Joi.object({
    tittle: Joi.string().max(50).required(),
    annotation: Joi.string().max(1000).required()
});