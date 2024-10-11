export interface ResponseMessage {
  code: string;
  text: string;
  resource: string;
}

export interface MessageResponse {
  status: boolean;
  version: string;
  message: ResponseMessage;
}

export interface ServiceResponse<T> {
  status: boolean;
  version: string;
  message: ResponseMessage;
  data: T;
  error?: string;
}

export type Hosts = {
  [key: string]: string;
};

export type Service = {
  port: number;
};

export type Services = {
  [key: string]: Service;
};
