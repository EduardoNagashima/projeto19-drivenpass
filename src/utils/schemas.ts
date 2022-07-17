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

export const cardSchema: ObjectSchema = Joi.object({
    tittle: Joi.string().required(),
    cardNumber: Joi.string().length(16).pattern(/^[0-9]+$/).required(),
    cardName: Joi.string().required(),
    cvc: Joi.string().length(3).required(),
    password: Joi.string().length(4).pattern(/^[0-9]+$/).required(),
    expDate: Joi.string().regex(/(0[1-9]|1[0-2])\/?(([0-9]{4})|[0-9]{2}$)/).required(),
    isVirtual: Joi.boolean().required(),
    type: Joi.string().valid('credit', 'debit').required()
})