import { Router } from 'express'
import EmployeeController from '../controllers/EmployeeController'
import AuthService from '../services/AuthService'
import { celebrate, Segments, Joi } from 'celebrate'

const employeeController = new EmployeeController()
const authService = new AuthService()

const router = Router()

router.use(authService.isAuthenticated)

router.get('/', employeeController.getAll)
router.get(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        }
    }),
    employeeController.getOnly
)

router.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            role: Joi.string().required(),
        }
    }),
    employeeController.post
)

router.put(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        },
        [Segments.BODY]: {
            name: Joi.string().required(),
            role: Joi.string().required(),
        }
    }),
    employeeController.put
)
router.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        }
    }),
    employeeController.delete
)

export default router
