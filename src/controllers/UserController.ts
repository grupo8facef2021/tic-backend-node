import { Request, Response } from 'express'
import UserService from '../services/UserService'

class UserController {
    public async getAll(request: Request, response: Response) {
        const userService = new UserService()
        const users = await userService.getAll()

        return response.json(users)
    }

    public async getOnly(request: Request, response: Response) {
        const userService = new UserService()
        const { id } = request.params
        const user = await userService.getOnly(id)

        return response.json(user)
    }

    public async put(request: Request, response: Response) {
        const userService = new UserService()
        const { id } = request.params
        const { name, password, new_password, level } = request.body
        const user = await userService.update({ id, name, password, new_password, level })

        return response.json(user)
    }

    public async post(request: Request, response: Response) {
        const userService = new UserService()
        const { name, email, password, level } = request.body
        const user = await userService.create({ name, email, password, level })

        return response.status(201).json(user)
    }

    public async delete(request: Request, response: Response) {
        const userService = new UserService()
        const { id } = request.params

        await userService.remove(id)

        return response.status(204).end()
    }
}

export default UserController