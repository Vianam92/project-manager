import { Service } from "typedi";
import jwt from "jsonwebtoken";
import { UserService } from "../../domain/services/user.services";
import { SignInInput, SignInOutput } from "../types/auth.type";
import { PasswordVO } from "../../domain/vos/user/password.vo";
import { EmailVO } from "../../domain/vos/user/email.vo";

@Service()

export class RegisterUseCase{
   constructor(private service: UserService){}

   async execute(request: SignInInput): Promise<SignInOutput>{
      const email = EmailVO.create(request.email);
      const user = await this.service.findByEmail(email);
      const plainPassword = PasswordVO.create(request.password);
      await this.service.isValidPassword(plainPassword, user);
      const refreshToken = jwt.sign({ email: user.email.value }, "SECRET", {
        expiresIn: 86400, // 24h
      });
      const userToken = jwt.sign({ email: user.email.value }, "SECRET", {
        // expiresIn: 300, // 5min
        expiresIn: 86400, // 24h
      });
      return { user_token: userToken, refresh_token: refreshToken };
    }
}