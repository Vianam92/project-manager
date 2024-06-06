export class PasswordVO {
    private constructor(private password: string) {}
  
    static create(password: string) {
      // VALIDACIONES
      return new PasswordVO(password);
    }
  
    static createFromHash(password: string) {
      return new PasswordVO(password);
    }
  
    get value(): string {
      return this.password;
    }
  }