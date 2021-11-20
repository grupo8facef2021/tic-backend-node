import { Joi, celebrate, Segments } from "celebrate";
import { Router } from "express";
import ActivitieController from "../controllers/ActivitieController";
import AuthService from "../services/AuthService";

const activitieController = new ActivitieController();
const authService = new AuthService();
const router = Router();

router.use(authService.isAuthenticated);

router.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      description: Joi.string().required(),
      vehicle_model: Joi.string().required(),
      vehicle_color: Joi.string().required(),
      vehicle_board: Joi.string().required(),
      prevision_date: Joi.date().required(),
      client_id: Joi.string().uuid().required(),
      situation_id: Joi.string().uuid().required(),
      user_id: Joi.string().uuid().required(),
      employee_id: Joi.string().uuid().required(),
    },
  }),
  activitieController.post
);

router.get("/", activitieController.getAll);

router.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  activitieController.getOnly
);

router.patch(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      title: Joi.string().required(),
      description: Joi.string().required(),
      prevision_date: Joi.date().required(),
      situation_id: Joi.string().uuid().required(),
    },
  }),
  activitieController.patch
);

router.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  activitieController.delete
);

export default router;
