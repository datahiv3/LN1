import Router from "@koa/router";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import helmet from "koa-helmet";
import koaLogger from "koa-pino-logger";
import { isProduction } from "./config";
import { adminGetAllUserProfiles } from "./controllers/admin/allUserProfiles";
import { allUserWhitelistRequests } from "./controllers/admin/allUserWhitelistRequests";
import { adminApproveProfile, adminRejectProfile } from "./controllers/admin/approveProfile";
import { adminGetUserProfile } from "./controllers/admin/getUserProfile";
import { adminGetUserProfileMaxVersion } from "./controllers/admin/getUserProfileMaxVersion";
import { adminGetUserProfiles } from "./controllers/admin/getUserProfiles";
import { ethHealth } from "./controllers/eth/health";
import { ethIsAdmin } from "./controllers/eth/is-admin";
import { ethLogout } from "./controllers/eth/logout";
import { ethGetNonce } from "./controllers/eth/nonce";
import { ethVerify } from "./controllers/eth/verify";
import { index } from "./controllers/index";
import { createNode } from "./controllers/node/create";
import { tokenGetProof } from "./controllers/token/proof";
import { cancelProfile } from "./controllers/user/cancelProfile";
import { createProfile } from "./controllers/user/createProfile";
import { getProfile } from "./controllers/user/getProfile";
import { getProfileMaxVersion } from "./controllers/user/getProfileMaxVersion";
import { getProfiles } from "./controllers/user/getProfiles";
import { getProfilesCount } from "./controllers/user/getProfilesCount";
import { getProfilesCountPending } from "./controllers/user/getProfilesCountPending";
import { getProfilesCountVerified } from "./controllers/user/getProfilesCountVerified";
import { getWhitelistRequest } from "./controllers/user/getWhitelistRequest";
import { userWhitelistRequest } from "./controllers/whitelist/request";
import { cronInit } from "./cron/index";
import { client } from "./db";
import { authMiddleware } from "./middlewares/auth";
import { cacheMiddleware } from "./middlewares/cache";
import { recaptchaMiddleware } from "./middlewares/captcha";
import { corsMiddleware } from "./middlewares/cors";
import { dateRangeMiddleware } from "./middlewares/dateRange";
import { evmAdminMiddleware } from "./middlewares/evmAdmin";
import { initMiddleware } from "./middlewares/init";
import { limiter } from "./middlewares/limiter";
import { notFound } from "./middlewares/notFound";
import { paginationMiddleware } from "./middlewares/page";
import { requireAdminMiddleware } from "./middlewares/requireAdmin";
import { requireAuthMiddleware } from "./middlewares/requireAuth";
import { verifySignatureMiddleware } from "./middlewares/verifySignature";
import logger from "./utils/log";
import { production } from "./utils/production";

// create app
const app = new Koa();

app.use(initMiddleware);
app.use(cacheMiddleware);
if (isProduction) app.use(koaLogger());
app.use(helmet());
app.use(helmet.hidePoweredBy());
app.use(corsMiddleware);
app.use(bodyParser({ formLimit: "50mb" }));
app.use(authMiddleware);
app.use(evmAdminMiddleware);

// db
await client.connect();
client.on("close", () => client.connect());

// app router
const router = new Router({ prefix: "/v1" });

router.use(dateRangeMiddleware);
router.use(paginationMiddleware);

// root
router.get("/", index);

// eth
const eth = new Router({ prefix: "/eth" });
eth.get("/nonce", ethGetNonce);
eth.post("/verify", ethVerify);
eth.post("/health", ethHealth);
eth.post("/is-admin", requireAuthMiddleware, ethIsAdmin);
eth.post("/logout", ethLogout);
router.use(eth.routes());

// token
const token = new Router({ prefix: "/token" });
token.post("/faucet", requireAuthMiddleware, recaptchaMiddleware, tokenGetProof);
router.use(token.routes());

// node
const node = new Router({ prefix: "/node" });
node.post("/create", requireAuthMiddleware, createNode);
router.use(node.routes());

// admin
const admin = new Router({ prefix: "/admin" });
admin.get("/user/profiles", requireAdminMiddleware, adminGetUserProfiles);
admin.get("/user/profile/:id", requireAdminMiddleware, adminGetUserProfile);
admin.get("/user/all/profiles", requireAdminMiddleware, adminGetAllUserProfiles);
admin.get("/user/profile/maxVersion", requireAdminMiddleware, adminGetUserProfileMaxVersion);
admin.post("/user/profile/approve/:id", requireAdminMiddleware, adminApproveProfile);
admin.post("/user/profile/reject/:id", requireAdminMiddleware, adminRejectProfile);
admin.get("/user/whitelist/requests", requireAdminMiddleware, allUserWhitelistRequests);
router.use(admin.routes());

// user
const user = new Router({ prefix: "/user" });
user.get("/profiles", requireAuthMiddleware, getProfiles);
user.get("/profiles/count", getProfilesCount);
user.get("/profiles/countPending", getProfilesCountPending);
user.get("/profiles/countVerified", getProfilesCountVerified);
user.get("/profile/:id", requireAuthMiddleware, getProfile);
user.post("/profile", requireAuthMiddleware, verifySignatureMiddleware, createProfile);
user.delete("/profile/:id", requireAuthMiddleware, cancelProfile);
user.get("/profiles/maxVersion", requireAuthMiddleware, getProfileMaxVersion);
user.post("/whitelistRequest", requireAuthMiddleware, recaptchaMiddleware, verifySignatureMiddleware, userWhitelistRequest);
user.get("/whitelistRequest", requireAuthMiddleware, getWhitelistRequest);
router.use(user.routes());

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
