import { DomainFormatException } from "./domain-format.exceptions";


export class PasswordMissmatchException extends DomainFormatException {
  constructor(constructorName: string) {
    super(`${constructorName} -> Password missmatch`);
  }
}
