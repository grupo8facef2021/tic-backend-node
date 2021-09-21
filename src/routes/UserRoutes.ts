import { Router } from 'express'
import UserController from '../controllers/UserController'

const userController = new UserController()

const router = Router()

router.get('/', userController.getAll)
router.get('/:id', userController.getOnly)
router.post('/', userController.post)
router.put('/:id', userController.put)
router.delete('/:id', userController.delete)

export default router