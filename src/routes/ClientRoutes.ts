import { Router } from "express";
import AuthService from "../services/AuthService";
import ClientController from "../controllers/ClientController";

const clientController = new ClientController()
const authService = new AuthService()

const router = Router()

router.use(authService.isAuthenticated)

router.get('/', clientController.getAll)

router.post('/', clientController.post)

export default router