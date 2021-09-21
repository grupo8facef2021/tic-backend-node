import { getCustomRepository } from "typeorm"
import EmployeeRepository from '../repositories/EmployeeRepository'

interface IRequest {
    name: string,
    role: string,
}

class EmployeeService {
    async create({ name, role }: IRequest) {
        const employeeRepository = getCustomRepository(EmployeeRepository)
        const employee = employeeRepository.create({ name, role })

        await employeeRepository.save(employee)
        return employee
    }

    async get(request: Request, reponse: Response) {
        const employeeRepository = getCustomRepository(EmployeeRepository)
        
    } 

    async update(request: Request, response: Response) {
        const employeeRepository = getCustomRepository(EmployeeRepository)

    }

    public async remove(request: Request, response: Response) {
        const employeeRepository = getCustomRepository(EmployeeRepository)
 
    }
}

export default EmployeeService