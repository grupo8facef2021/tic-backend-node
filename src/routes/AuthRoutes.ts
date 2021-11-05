import { Router } from "express";
import AuthController from "../controllers/AuthController";
import { celebrate, Segments, Joi } from 'celebrate'

const authController = new AuthController()

const authRouter = Router()
authRouter.post(
    '/',
    // celebrate({
    //     [Segments.BODY]: {
    //         email: Joi.string().required(),
    //         password: Joi.string().required()
    //     }
    // }),
    authController.auth
)

export default authRouter