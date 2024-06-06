import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import Container from "typedi";
import { SignInInput } from "../../application/types/auth.type";
import { RegisterUseCase } from "../../application/usecase/auth.usecase";

export async function signInController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(errors.array());
  }
  const { email, password } = req.body;

  const signInRequest: SignInInput = {
    email,
    password,
  };

  try {
    const useCase = Container.get(RegisterUseCase);
    const token = await useCase.execute(signInRequest);
    return res.status(200).send(token);
  } catch (err) {
    return next(err);
  }
}
