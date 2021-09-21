import { Request, Response, Router } from 'express'
import EmployeeController from '../controllers/EmployeeController'

const employeeController = new EmployeeController()
const router = Router()

router.post('/', employeeController.create)
router.get('/', employeeController.get)    

export default router