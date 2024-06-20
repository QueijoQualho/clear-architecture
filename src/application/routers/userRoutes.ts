import { Router } from "express";
import { expressRouteAdapter } from "../utils/adapters/expressRouteAdapter";
import { createUserControllerFactory } from "../factorys/createUserControllerFactory";

export default (router: Router): void => {
  router.post("/users", expressRouteAdapter(createUserControllerFactory()));
};
