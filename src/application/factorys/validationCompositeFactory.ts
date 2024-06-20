import { Validation } from "../utils/interfaces";
import { UserValidator } from "../validations/userValidator";
import { ValidationComposite } from "../validations/validationComposite";

export const validationCompositeFactory = (): Validation => {
  const validations: Validation[] = [
    new UserValidator(),
  ];

  return new ValidationComposite(validations);
};
