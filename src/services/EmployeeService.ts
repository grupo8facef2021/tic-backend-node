import CustomError from '../exceptions/CustomError'
import { getCustomRepository } from "typeorm"
import EmployeeRepository from '../repositories/EmployeeRepository'

interface ICreateRequest {
    name: string,
    role: string,
}

interface IUpdateRequest {
    id: string,
    name: string,
    role: string,
}
class EmployeeService {

    employeeRepository: EmployeeRepository

    constructor() {
        this.employeeRepository = getCustomRepository(EmployeeRepository)
    }

    async _findEmployee(id: string) {
        const employee = await this.employeeRepository.findOne(id)
        if (!employee) {
            throw new CustomError('Funcionário não encontrado', 404)
        }

        return employee
    }

    async getAll() {
        const employees = await this.employeeRepository.find()
        return employees
    }

    async getOnly(id: string) {
        const employee = await this._findEmployee(id)

        return employee
    }

    async create({ name, role }: ICreateRequest) {
        const employeeExists = await this.employeeRepository.findByName(name)

        if (employeeExists) {
            throw new CustomError('Funcionário já cadastrado com esse nome')
        }

        let employee = this.employeeRepository.create({ name, role })

        await this.employeeRepository.save(employee)
        return employee
    }

    async update({ id, name, role }: IUpdateRequest) {
        let employee = await this._findEmployee(id)

        employee = { ...employee, name, role }
        await this.employeeRepository.save(employee)

        return employee
    }

    async remove(id: string) {
        await this._findEmployee(id)

        await this.employeeRepository.delete(id)
    }
}

export default EmployeeService