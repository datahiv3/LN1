export type Message = {
  code: number;
  text: string;
};

export type Response<Data = null, ErrorData = null> = {
  status: boolean;
  version: string;
  data?: Data;
  error?: ErrorData;
  message: Message;
};

export type SuccessResponse<T> = {
  status: true;
  version: "0.1.0";
  message: { code: number; text: string };
  data: T;
};

export type ErrorResponse = {
  status: false;
  version: "0.1.0";
  message: { code: number; text: string };
  error: string;
};

const response: Response = {
  status: false,
  version: process.env.VERSION || "0.1.0",
  message: { code: 404, text: "HTTP_404" },
};

export const newMessage = (code: number, text: string): Message => {
  return {
    code: code || 404,
    text,
  };
};

const newResponse = <T, E>({ status, message, data, error }: { status: boolean; message?: Message; data?: T; error?: E }): Response<T, E> => {
  const res: Response<T, E> = {
    status,
    version: response.version,
    message: message || response.message,
  };
  if (data) {
    res.data = data;
  }
  if (error) {
    res.error = error;
  }
  return res;
};

export const successResponse = <T>(data: T): SuccessResponse<T> => {
  return {
    status: true,
    version: "0.1.0",
    message: { code: 200, text: "success" },
    data,
  };
};

export const errorResponse = (error: string, code?: number): ErrorResponse => {
  return {
    status: false,
    version: "0.1.0",
    message: { code: code || 500, text: "error" },
    error,
  };
};

export default newResponse;
