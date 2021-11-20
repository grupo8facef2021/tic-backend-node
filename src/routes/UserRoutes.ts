import { Router } from "express";
import UserController from "../controllers/UserController";
import AuthService from "../services/AuthService";
import { celebrate, Segments, Joi } from "celebrate";

const userController = new UserController();
const authService = new AuthService();

const router = Router();

router.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      level: Joi.number(),
    },
  }),
  userController.post
);

router.use(authService.isAuthenticated);

router.get("/", userController.getAll);
router.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  userController.getOnly
);
router.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
      password: Joi.string().required(),
      new_password: Joi.string(),
      level: Joi.number().required(),
    },
  }),
  userController.put
);
router.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  userController.delete
);

export default router;
