import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import UserService from '../../services/UserService'

class CreateUserController {
    public async execute(request: Request, response: Response) {
        console.log('aqui')
        const userService = new UserService()
        const { name, email, password, level } = request.body

        const user = await userService.create({ name, email, password, level })
        console.log(user)

        return response.status(201).json(user)
    }
}

export default CreateUserController