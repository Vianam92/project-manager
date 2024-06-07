import { IdVO } from "../vos/shared/id.vo";
import { EmailVO } from "../vos/user/email.vo";
import { PasswordVO } from "../vos/user/password.vo";
import { RoleVO } from "../vos/user/role.vo";
import { UserNameVO } from "../vos/user/username.vo";

export type UserType = {
    id: IdVO;
    username: UserNameVO;
    email: EmailVO;
    password: PasswordVO;
    role: RoleVO;
  };
  
  export class User {
    constructor(private user: UserType) {}
  
    get id(): IdVO {
      return this.user.id;
    }

    get username(): UserNameVO{
      return this.user.username;
    }
  
    get email(): EmailVO {
      return this.user.email;
    }
  
    get password(): PasswordVO {
      return this.user.password;
    }
  
    get role(): RoleVO {
      return this.user.role;
    }
  }