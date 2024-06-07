import { Service } from "typedi";
import { UserService } from "../../domain/services/user.services";
import { SignUpInput, SignUpOutput } from "../types/auth.type";
import { UserType } from "../../domain/models/userEntity";
import { EmailVO } from "../../domain/vos/user/email.vo";
import { PasswordVO } from "../../domain/vos/user/password.vo";
import { IdVO } from "../../domain/vos/shared/id.vo";
import { Role, RoleVO } from "../../domain/vos/user/role.vo";
import { UserNameVO } from "../../domain/vos/user/username.vo";

@Service()
export class SignUpUseCase {
  constructor(private service: UserService) {}

  async execute(request: SignUpInput): Promise<SignUpOutput> {
    const user: UserType = {
      id: IdVO.create(),
      username: UserNameVO.create(request.username),
      email: EmailVO.create(request.email),
      password: PasswordVO.create(request.password),
      role: RoleVO.create(request.role as Role),
    };
    await this.service.persist(user);
    return { email: user.email.value, id: user.id.value };
  }
}
