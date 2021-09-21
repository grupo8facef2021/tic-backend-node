interface IRequest {
    email: string,
    password: string
}

class AuthService {
    async auth({ email, password }: IRequest) {

    }
}

export default AuthService