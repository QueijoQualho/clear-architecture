// src/factories/createUserControllerFactory.ts
import { getUserRepository } from "../../domain/repositories/userRepository";
import { DbCreateUser } from "../../infra/db/repository/dbCreateUser";
import { CreateUserController } from "../controller/UserController/createUser";
import { validationCompositeFactory } from "./validationCompositeFactory";

export const createUserControllerFactory = () => {
  const dbAddUser = new DbCreateUser(getUserRepository());
  const validation = validationCompositeFactory();
  return new CreateUserController(dbAddUser, validation);
};
