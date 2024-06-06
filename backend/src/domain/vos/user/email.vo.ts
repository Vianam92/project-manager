import { VOFormatException } from "../../exceptions/vo-format.exceptions";

export class EmailVO {
    private constructor(private email: string) {}
  
    static create(email: string) {
      const isValidEmail = email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      if (!isValidEmail) {
        throw new VOFormatException(
          EmailVO.name,
          email,
          "has to be a valid email address"
        );
      }
  
      return new EmailVO(email);
    }
  
    get value(): string {
      return this.email;
    }
  }