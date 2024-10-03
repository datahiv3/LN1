import Koa, { BaseContext } from "koa";
import Router from "@koa/router";

declare module "koa" {
  interface BaseContext {
    evmAddress: string;
    suiAddress: string;
    seiAddress: string;

    isAuth: boolean;
    isAdmin: boolean;
    isStravaConnected: boolean;

    body?: any;
  }
}

declare type KoaContext = Koa.ParameterizedContext<Koa.DefaultState, Koa.DefaultContext & Router.RouterParamContext<Koa.DefaultState, Koa.DefaultContext>, BaseContext>;
declare type KoaNext = Koa.Next;
