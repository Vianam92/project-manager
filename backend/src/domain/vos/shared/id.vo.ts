import { v4, validate } from "uuid";
import { VOFormatException } from "../../exceptions/vo-format.exceptions";

export class IdVO {
  private constructor(private id: string) {}

  static create(): IdVO {
    return new IdVO(v4());
  }

  static createWithUUID(uuid: string): IdVO {
    if (!validate(uuid)) {
      throw new VOFormatException(
        IdVO.name,
        uuid,
        "have to provide a valid UUID"
      );
    }
    return new IdVO(uuid);
  }

  get value(): string {
    return this.id;
  }
}
