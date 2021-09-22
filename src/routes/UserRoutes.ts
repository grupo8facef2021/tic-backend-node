import { Router } from 'express'
import UserController from '../controllers/UserController'
import AuthService from '../services/AuthService'

const userController = new UserController()
const authService = new AuthService()

const router = Router()

router.post('/', userController.post)

router.use(authService.isAuthenticated)

router.get('/', userController.getAll)
router.get('/:id', userController.getOnly)
router.put('/:id', userController.put)
router.delete('/:id', userController.delete)

export default router