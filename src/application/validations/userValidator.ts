import { Length, validateOrReject } from "class-validator";
import { User } from "../../domain/entities/userEntity";
import { Validation } from "../utils/interfaces";

export class UserDTO {
    @Length(3, 50)
      firstName: string;

    @Length(3, 50)
      lastName: string;

    age: number;

    constructor(user: User) {
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.age = user.age;
    }
}

export class UserValidator implements Validation {
  async validate(data: any): Promise<void | Error> {
    const userDTO = new UserDTO(data);
    try {
      await validateOrReject(userDTO);
    } catch (errors) {
      throw new Error("Validation error: " + JSON.stringify(errors));
    }
  }
}

