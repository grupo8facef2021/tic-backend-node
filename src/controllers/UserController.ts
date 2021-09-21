import { Request, Response } from 'express'
import UserService from '../services/UserService'

class UserController {
    public async post(request: Request, response: Response) {
        const userService = new UserService()
        const { name, email, password, level } = request.body

        const user = await userService.create({ name, email, password, level })

        return response.status(201).json(user)
    }
}

export default UserController