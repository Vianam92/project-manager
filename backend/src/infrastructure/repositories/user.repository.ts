import { User, UserType } from "../../domain/models/userEntity";
import { UserRepository } from "../../domain/repositories/user.repository";
import { IdVO } from "../../domain/vos/shared/id.vo";
import { EmailVO } from "../../domain/vos/user/email.vo";
import { PasswordVO } from "../../domain/vos/user/password.vo";
import { RoleVO } from "../../domain/vos/user/role.vo";
import { UserNameVO } from "../../domain/vos/user/username.vo";
import { UserSchema } from "../schemas/user.schemas";

export class UserRepositoryPg implements UserRepository {
    async save(user: User): Promise<User> {
      const newUser = {
        id: user.id.value,
        username: user.username.value,
        email: user.email.value,
        password: user.password.value,
        role: user.role.value,
      };
  
      const userModel = new UserSchema(newUser);
      await userModel.save();
      return user;
    }
  
    async findByEmail(email: EmailVO): Promise<User | null> {
      const user: any = await UserSchema.findOne({
        where: { email: email.value },
      });
  
      if (!user) return null;
  
      const userData: UserType = {
        id: IdVO.createWithUUID(user?.id),
        username: UserNameVO.create(user?.username),
        email: EmailVO.create(user?.email),
        password: PasswordVO.createFromHash(user?.password),
        role: RoleVO.create(user?.role),
      };
      return new User(userData);
    }
  }