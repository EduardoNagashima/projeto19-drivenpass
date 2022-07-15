import Joi, { ObjectSchema } from "joi";

export const signInSchema: ObjectSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(10).required()
})