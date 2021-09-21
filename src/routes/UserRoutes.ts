import { Request, Response, Router } from 'express'
import UserController from '../controllers/UserController'

const createUserController = new UserController()

const router = Router()

router.post('/', createUserController.post)

router.get('/', () => {
    console.log('teste2')
})
    
export default router