import { User } from '../models/userEntity';
import { EmailVO } from '../vos/user/email.vo';

export interface UserRepository {
  save(user: User): Promise<User>;
  findByEmail(email: EmailVO): Promise<User | null>;
}
