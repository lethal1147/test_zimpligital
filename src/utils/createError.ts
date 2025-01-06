import { ErrorObject, StatusCodeEnum } from "@types";

const createError = (
  message: string,
  statusCode: StatusCodeEnum
): ErrorObject => {
  const err = new Error(message) as ErrorObject;
  err.statusCode = statusCode;
  throw err;
};

export default createError;
