import { Request, Response } from "express";
import AuthService from "../services/AuthService";

class AuthController {
    async auth(request: Request, response: Response) : Promise<any> {
        const authService = new AuthService
        const { email, password } = request.body

        const userToken = await authService.auth({ email, password })

        return response.json(userToken)
    }
}

export default AuthController