import { getCustomRepository } from "typeorm"
import UserRepository from '../repositories/UserRepository'
import { hash, compare } from 'bcryptjs'
import CustomError from '../exceptions/CustomError'

interface IRequest {
    name: string,
    email: string,
    password: string,
    level: number,
}

class UserService {
    async create({ name, email, password, level }: IRequest) {
        const userRepository = getCustomRepository(UserRepository)

        const userExists = await userRepository.findByEmail(email)

        if(userExists){
            throw new CustomError('Usuário já cadastrado com esse email')
        }

        const hashPassword = await hash(password, 8)

        const user = userRepository.create({ name, email, password: hashPassword, level })
        await userRepository.save(user)

        return user
    }
}

export default UserService