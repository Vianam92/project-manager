import { DomainFormatException } from "./domain-format.exceptions";

export class EntityNotFoundException extends DomainFormatException {
  resource: unknown;
  constructor(constructorName: string, resource: string) {
    super(`${constructorName} -> Resource '${resource}' not found`);
    this.resource = resource;
  }
}
