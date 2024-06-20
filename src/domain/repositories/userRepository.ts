import { EntityManager, Repository } from "typeorm";
import { User } from "../entities/userEntity";
import Database from "../../infra/config";

export type UserRepositoryType = Repository<User>
const databaseInstance = Database.getInstance();

const UserRepository: UserRepositoryType = databaseInstance.getDataSource().getRepository(User).extend({});

export function getUserRepository(manager?: EntityManager): Repository<User> {
  if (manager) {
    return manager.withRepository(UserRepository);
  }
  return UserRepository;
}
