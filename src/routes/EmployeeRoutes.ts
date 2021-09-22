import { Router } from 'express'
import EmployeeController from '../controllers/EmployeeController'
import AuthService from '../services/AuthService'

const employeeController = new EmployeeController()
const authService = new AuthService()

const router = Router()

router.use(authService.isAuthenticated)

router.get('/', employeeController.getAll)
router.get('/:id', employeeController.getOnly)
router.post('/', employeeController.post)
router.put('/:id', employeeController.put)
router.delete('/:id', employeeController.delete)

export default router