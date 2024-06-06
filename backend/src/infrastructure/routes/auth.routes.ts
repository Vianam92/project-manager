import { Router } from 'express';
import { body } from 'express-validator';
import { signUpController } from '../controllers/sign-up.controller';
import { signInController } from '../controllers/sign-in.controller';

const router = Router();

router.post(
  '/auth/register',
  body('email').notEmpty().isString(),
  body('password').notEmpty(),
  signUpController
);

router.post(
  '/auth/login',
  body('email').notEmpty().isString(),
  body('password').notEmpty(),
  signInController
);

export { router as AuthRouter };
