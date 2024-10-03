import Router from "@koa/router";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import helmet from "koa-helmet";
import koaLogger from "koa-pino-logger";
import { isProduction } from "./config";
import { index } from "./controllers/index";
import { cronInit } from "./cron/index";
import { client } from "./db";
import { cacheMiddleware } from "./middlewares/cache";
import { corsMiddleware } from "./middlewares/cors";
import { dateRangeMiddleware } from "./middlewares/dateRange";
import { evmAdmin } from "./middlewares/evmAdmin";
import { init } from "./middlewares/init";
import { limiter } from "./middlewares/limiter";
import { notFound } from "./middlewares/notFound";
import { paginationMiddleware } from "./middlewares/page";
import logger from "./utils/log";
import { production } from "./utils/production";

// create app
const app = new Koa();

app.use(init);
app.use(cacheMiddleware);
if (isProduction) app.use(koaLogger());
app.use(helmet());
app.use(helmet.hidePoweredBy());
app.use(corsMiddleware);
app.use(bodyParser({ formLimit: "50mb" }));
app.use(evmAdmin);

// db
await client.connect();
client.on("close", () => client.connect());

// app router
const router = new Router({ prefix: "/v1" });

router.use(dateRangeMiddleware);
router.use(paginationMiddleware);

// root
router.get("/", index);

app.use(router.routes());
app.use(router.allowedMethods());
// /app router

app.use(limiter);
app.use(notFound);

const port = production(3000, 3030);

// app
app.listen(port, production("0.0.0.0", "127.0.0.1"));

// app info
logger.info({ thread: "main", data: "service started", port });

cronInit();
