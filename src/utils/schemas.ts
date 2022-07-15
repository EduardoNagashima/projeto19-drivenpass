import Joi, { ObjectSchema } from "joi";

export const signUpSchema: ObjectSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(10).required()
})