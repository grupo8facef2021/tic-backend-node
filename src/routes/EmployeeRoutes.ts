import { Router } from 'express'
import EmployeeController from '../controllers/EmployeeController'

const employeeController = new EmployeeController()
const router = Router()

router.get('/', employeeController.getAll)
router.get('/:id', employeeController.getOnly)
router.post('/', employeeController.post)
router.put('/:id', employeeController.put)
router.delete('/:id', employeeController.delete)

export default router