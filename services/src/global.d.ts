import Router from "@koa/router";
import Koa, { BaseContext } from "koa";

declare module "koa" {
  interface BaseContext {
    evmAddress: string;

    isAuth: boolean;
    isAdmin: boolean;

    body?: any;
  }
}

declare type KoaContext = Koa.ParameterizedContext<Koa.DefaultState, Koa.DefaultContext & Router.RouterParamContext<Koa.DefaultState, Koa.DefaultContext>, BaseContext>;
declare type KoaNext = Koa.Next;
