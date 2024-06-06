import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Container from 'typedi';
import { SignUpInput } from '../../application/types/auth.type';
import { SignUpUseCase } from '../../application/usecase/sign-up.usecase';
import { UserRepositoryPg } from '../repositories/user.repository';
import { UserService } from '../../domain/services/user.services';

export async function signUpController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(errors.array());
  }
  const { email, password, role } = req.body;

  const signUpRequest: SignUpInput = {
    email,
    password,
    role,
  };

  try {
    const userRepository = new UserRepositoryPg();
    const userService = new UserService(userRepository);
    const useCase = new SignUpUseCase(userService);
    const token = await useCase.execute(signUpRequest);
    return res.status(201).send(token);
  } catch (err) {
    return next(err);
  }
}
