import { EntityRepository, Repository } from 'typeorm'
import UserEntity from '../entities/UserEntity'

@EntityRepository(UserEntity)
class UserRepository extends Repository<UserEntity>{
    async findByEmail(email: string) {
        return await this.findOne({
            where: {
                email
            }
        })
    }
}

export default UserRepository