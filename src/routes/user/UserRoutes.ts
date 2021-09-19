import { Request, Response, Router } from 'express'
import CreateUserController from '../../controllers/user/CreateUserController'

const createUserController = new CreateUserController()

const router = Router()

router.post('/', createUserController.execute)

router.get('/', () => {
    console.log('teste2')
})
    
export default router