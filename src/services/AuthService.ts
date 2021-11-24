import { compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import CustomError from "../exceptions/CustomError";
import UserRepository from "../repositories/UserRepository";
import { getCustomRepository } from "typeorm";
import UserService from "./UserService";
import authConfig from "../config/auth";
import { NextFunction, Request, Response } from "express";

interface IRequest {
  email: string;
  password: string;
}

class AuthService {
  userService: UserService;

  async auth({ email, password }: IRequest) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw new CustomError("Usuário ou senha inválidos", 422);
    }

    const correctPassword = await compare(password, user.password);
    if (!correctPassword) {
      throw new CustomError("Usuário ou senha inválidos", 422);
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return {
      user,
      token,
    };
  }

  isAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeaders = request.headers.authorization;

    if (!authHeaders) {
      throw new CustomError("JWT Token não informado", 401);
    }

    const [, token] = authHeaders.split(" ");

    try {
      const {sub} = verify(token, authConfig.jwt.secret);
      request.user_id = sub
      return next();
    } catch (error) {
      throw new CustomError("Token inválido", 401);
    }
  }
}

export default AuthService;
