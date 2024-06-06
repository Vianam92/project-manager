export enum Role {
    ADMIN = "ADMIN",
    USER = "member",
  }
  
  export class RoleVO {
    private constructor(private role: Role) {}
  
    static create(role: Role) {
      return new RoleVO(role);
    }
  
    get value(): Role {
      return this.role;
    }
  }