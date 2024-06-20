import { ServerError } from "../../errors";
import { HttpResponse } from "../interfaces";

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack as string),
});

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data,
});

export const noContent = (): HttpResponse => ({
  statusCode: 204,
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});

export const unauthorized = (error: Error): HttpResponse => ({
  statusCode: 401,
  body: error.message,
});

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error.message,
});

export const notFound = (error: Error): HttpResponse => ({
  statusCode: 404,
  body: error.message,
});
