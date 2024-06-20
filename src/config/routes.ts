import {Express, Router } from "express";
import userRoutes from "../application/routers/userRoutes";

export default (app: Express):void =>{
  const router = Router();
  userRoutes(router);
  app.use("/api", router);
};
