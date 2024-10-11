import type Router from "@koa/router";
import type Koa from "koa";
import type { BaseContext } from "koa";

declare module "koa" {
  interface BaseContext<ResponseBodyT> {
    evmAddress: string;

    isAuth: boolean;
    isAdmin: boolean;

    body?: ResponseBodyT;
    parsedBody?: unknown;
  }
}

declare type KoaContext = Koa.ParameterizedContext<Koa.DefaultState, Koa.DefaultContext & Router.RouterParamContext<Koa.DefaultState, Koa.DefaultContext>, BaseContext>;
declare type KoaNext = Koa.Next;
