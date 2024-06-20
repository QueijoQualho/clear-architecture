import { ValidationError } from "class-validator";
import { Validation } from "../utils/interfaces";

export class ValidationComposite implements Validation {
  private readonly validations: Validation[];

  constructor(validations: Validation[]) {
    this.validations = validations;
  }

  async validate(data: any): Promise<void> {
    const errors: ValidationError[] = [];
    for (const validation of this.validations) {
      try {
        await validation.validate(data);
      } catch (err: any) {
        if (Array.isArray(err)) {
          errors.push(...err);
        } else {
          errors.push(err);
        }
      }
    }

    if (errors.length > 0) {
      throw errors;
    }
  }
}
