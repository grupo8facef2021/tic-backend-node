import { Request, Response } from 'express'
import EmployeeService from '../services/EmployeeService'

class EmployeeController {
    
    public async create(request: Request, response: Response) {
        const employeeService = new EmployeeService()
        const { name, role } = request.body
        const employee = await employeeService.create({ name, role })

        return response.status(201).json(employee)
    }

    public async get(request: Request, response: Response) {
        const employeeService = new EmployeeService()

    }

    public async update(request: Request, response: Response) {
        const employeeService = new EmployeeService()

    }

    public async remove(request: Request, response: Response) {
        const employeeService = new EmployeeService()
 
    }
}

export default EmployeeController