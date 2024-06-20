// src/application/controller/UserController/CreateUserController.ts
import { addUser } from "../../../domain/usecases/user/addUser";
import { badRequest, created } from "../../utils/httpResponses";
import { Controller, HttpRequest, HttpResponse, Validation } from "../../utils/interfaces";

export class CreateUserController implements Controller {
  constructor(
    private readonly addUserUseCase: addUser,
    private readonly validation: Validation
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      await this.validation.validate(httpRequest.body);

      const { firstName, lastName, age } = httpRequest.body;

      const user = await this.addUserUseCase.add({ firstName, lastName, age });

      return created(user);
    } catch (error: any) {
      return badRequest(error);
    }
  }
}
