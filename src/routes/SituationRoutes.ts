import { Router } from "express";
import SituationController from "src/controllers/SituationController";
import AuthService from "src/services/AuthService";
import { celebrate, Segments, Joi } from "celebrate";

const situationController = new SituationController();
const authService = new AuthService();

const router = Router();

router.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      description: Joi.string().required,
      color: Joi.string().required,
      status: Joi.number().required,
    },
  }),
  situationController.post
);

router.use(authService.isAuthenticated);

router.get("/", situationController.getAll);
router.get(
  "/id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  situationController.getOnly
)
router.put(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        },
        [Segments.BODY]: {
            description: Joi.string().required(),
            new_desciption: Joi.string().required(),
            color: Joi.string(),
            new_color: Joi.string(),
            status: Joi.number().required()
        }
    }),
    situationController.put
)
router.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        }
    }),
    situationController.delete
)

export default Router;
