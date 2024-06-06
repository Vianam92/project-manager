import { Inject, Service } from "typedi";
import { User, UserType } from "../models/userEntity";
import { PasswordVO } from "../vos/user/password.vo";
import { EmailVO } from "../vos/user/email.vo";
import bcrypt from "bcrypt";
import { EntityNotFoundException } from "../exceptions/not-found.exception";
import { PasswordMissmatchException } from "../exceptions/password-missmatch.exception";
import { UserRepository } from "../repositories/user.repository";

@Service()

export class UserService{
    constructor(@Inject("user-repository") private repository: UserRepository){}

    async persist(user: UserType): Promise<User> {
        const salt = 10;
        const hashedPassword = await bcrypt.hash(user.password.value, salt);
        const newUser: User = new User({
          id: user.id,
          email: user.email,
          password: PasswordVO.createFromHash(hashedPassword),
          role: user.role,
        });
        return this.repository.save(newUser);
      }
    
      async findByEmail(email: EmailVO): Promise<User> {
        const user = await this.repository.findByEmail(email);
        if (!user) throw new EntityNotFoundException(UserService.name, "user");
        return user;
      }
    
      async isValidPassword(password: PasswordVO, user: User): Promise<void> {
        const isValid = bcrypt.compare(password.value, user.password.value);
        if (!isValid) throw new PasswordMissmatchException(UserService.name);
      }
}