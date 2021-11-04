import { Router } from "express";
import AuthService from "../services/AuthService";
import ClientController from "../controllers/ClientController";
import { Joi, celebrate, Segments } from "celebrate";

const clientController = new ClientController()
const authService = new AuthService()

const router = Router()

router.use(authService.isAuthenticated)

router.get('/', clientController.getAll)

router.get(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        }
    }),
    clientController.getOnly
)

router.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            cpf: Joi.string().required(),
            phone: Joi.string().required(),
            email: Joi.string().required(),
            cep: Joi.string().required(),
            street: Joi.string().required(),
            neighborhood: Joi.string().required(),
            number: Joi.string().required()
        }
    }),
    clientController.post
)

router.put(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        },
        [Segments.BODY]: {
            name: Joi.string().required(),
            phone: Joi.string().required(),
            email: Joi.string().required(),
            cep: Joi.string().required(),
            street: Joi.string().required(),
            neighborhood: Joi.string().required(),
            number: Joi.string().required()
        }
    }),
    clientController.update
)

router.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        }
    }),
    clientController.delete
)

export default router