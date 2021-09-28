import { getCustomRepository } from "typeorm"
import UserRepository from '../repositories/UserRepository'
import { hash, compare } from 'bcryptjs'
import CustomError from '../exceptions/CustomError'

interface ICreateRequest {
    name: string,
    email: string,
    password: string,
    level: number,
}
interface IUpdateRequest {
    id: string,
    name: string,
    password: string,
    new_password: string,
    level: number,
}

class UserService {

    userRepository: UserRepository

    constructor() {
        this.userRepository = getCustomRepository(UserRepository)
    }

    async _findUser(id: string) {
        const user = await this.userRepository.findOne(id)
        if (!user) {
            throw new CustomError('Usuário não encontrado', 404)
        }

        return user
    }

    async getAll() {
        const users = await this.userRepository.find()

        return users
    }

    async getOnly(id: string) {
        const user = await this._findUser(id)

        return user
    }

    async create({ name, email, password, level }: ICreateRequest) {
        const userExists = await this.userRepository.findByEmail(email)

        if (userExists) {
            throw new CustomError('Usuário já cadastrado com esse email')
        }

        const hashPassword = await hash(password, 8)
        const user = this.userRepository.create({ name, email, password: hashPassword, level })

        await this.userRepository.save(user)

        return user
    }

    async update({ id, name, password, new_password, level }: IUpdateRequest) {
        let user = await this._findUser(id)

        const correctPassword = await compare(password, user.password)
        if (!correctPassword) {
            throw new CustomError('Senha incorreta', 422)
        }

        user = { ...user, name, level }

        if (new_password) {
            const hashPassword = await hash(new_password, 8)
            user.password = hashPassword
        }

        await this.userRepository.save(user)

        return user
    }

    async remove(id: string) {
        await this._findUser(id)

        await this.userRepository.delete(id)
    }
}

export default UserService