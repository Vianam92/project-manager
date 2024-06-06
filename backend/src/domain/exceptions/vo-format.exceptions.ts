import { DomainFormatException } from "./domain-format.exceptions";

export class VOFormatException extends DomainFormatException {
    value: unknown;
    rule: string;
    constructor(constructorName: string, value: unknown, rule: string) {
      const valueString =
        typeof value === "string" ? value : JSON.stringify(value);
      super(`${constructorName} -> Invalid value '${valueString}' (${rule})`);
      this.value = value;
      this.rule = rule;
    }
  }