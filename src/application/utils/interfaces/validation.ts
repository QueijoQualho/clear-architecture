// src/validators/ValidationInterface.ts
export interface Validation {
    validate(data: any): Promise<Error | void>;
  }
