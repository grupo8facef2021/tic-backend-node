import { EntityRepository, Repository } from 'typeorm'
import EmployeeEntity from '../entities/EmployeeEntity'

@EntityRepository(EmployeeEntity)
class EmployeeRepository extends Repository<EmployeeEntity>{
    async findByName(name: string) {
        return await this.findOne({
            where: {
                name
            }
        })
    }
}

export default EmployeeRepository