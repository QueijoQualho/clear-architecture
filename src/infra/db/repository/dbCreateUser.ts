import { User } from "../../../domain/entities/userEntity";
import { UserRepositoryType } from "../../../domain/repositories/userRepository";
import { addUser, addUserModel } from "../../../domain/usecases/user/addUser";

export class DbCreateUser implements addUser {
  constructor(private readonly userRepository: UserRepositoryType ) {}

  async add(userData: addUserModel):Promise<User> {
    const user = await this.userRepository.save(userData);
    return user;
  }
}
