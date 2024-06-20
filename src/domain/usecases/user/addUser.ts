import { User } from "../../entities/userEntity";

export interface addUserModel {
    firstName: string;
    lastName: string;
    age: number;
}

export interface addUser {
    add(user: addUserModel): Promise<User>;
}
