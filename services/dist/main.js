/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@koa/cors":
/*!****************************!*\
  !*** external "@koa/cors" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("@koa/cors");

/***/ }),

/***/ "@koa/router":
/*!******************************!*\
  !*** external "@koa/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@koa/router");

/***/ }),

/***/ "cron":
/*!***********************!*\
  !*** external "cron" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cron");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ "iso-datestring-validator":
/*!*******************************************!*\
  !*** external "iso-datestring-validator" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("iso-datestring-validator");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("koa");

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("koa-bodyparser");

/***/ }),

/***/ "koa-cash":
/*!***************************!*\
  !*** external "koa-cash" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("koa-cash");

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("koa-helmet");

/***/ }),

/***/ "koa-pino-logger":
/*!**********************************!*\
  !*** external "koa-pino-logger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("koa-pino-logger");

/***/ }),

/***/ "koa2-ratelimit":
/*!*********************************!*\
  !*** external "koa2-ratelimit" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("koa2-ratelimit");

/***/ }),

/***/ "lru-cache":
/*!****************************!*\
  !*** external "lru-cache" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("lru-cache");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "pino":
/*!***********************!*\
  !*** external "pino" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("pino");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   env: () => (/* binding */ env),
/* harmony export */   isProduction: () => (/* binding */ isProduction),
/* harmony export */   isStaging: () => (/* binding */ isStaging),
/* harmony export */   mongodbUrl: () => (/* binding */ mongodbUrl),
/* harmony export */   stage: () => (/* binding */ stage)
/* harmony export */ });
const stage = process.env.STAGE;
const env = process.env.ENV;
const isProduction = stage === "production";
const isStaging = env === "staging";
const mongodbUrl = process.env.MONGODB_URL;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmVuZXRlci9XRC93b3JrcGxhY2UtLWRhdGFoaXYzL2xuMS9zZXJ2aWNlcy9zcmMvY29uZmlnL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzdGFnZSA9IHByb2Nlc3MuZW52LlNUQUdFITtcbmV4cG9ydCBjb25zdCBlbnYgPSBwcm9jZXNzLmVudi5FTlYhO1xuXG5leHBvcnQgY29uc3QgaXNQcm9kdWN0aW9uID0gc3RhZ2UgPT09IFwicHJvZHVjdGlvblwiO1xuZXhwb3J0IGNvbnN0IGlzU3RhZ2luZyA9IGVudiA9PT0gXCJzdGFnaW5nXCI7XG5cbmV4cG9ydCBjb25zdCBtb25nb2RiVXJsID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwhO1xuIl0sIm5hbWVzIjpbInN0YWdlIiwicHJvY2VzcyIsImVudiIsIlNUQUdFIiwiRU5WIiwiaXNQcm9kdWN0aW9uIiwiaXNTdGFnaW5nIiwibW9uZ29kYlVybCIsIk1PTkdPREJfVVJMIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU1BLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsS0FBSyxDQUFFO0FBQ3hDLE9BQU8sTUFBTUQsTUFBTUQsUUFBUUMsR0FBRyxDQUFDRSxHQUFHLENBQUU7QUFFcEMsT0FBTyxNQUFNQyxlQUFlTCxVQUFVLGFBQWE7QUFDbkQsT0FBTyxNQUFNTSxZQUFZSixRQUFRLFVBQVU7QUFFM0MsT0FBTyxNQUFNSyxhQUFhTixRQUFRQyxHQUFHLENBQUNNLFdBQVcsQ0FBRSJ9

/***/ }),

/***/ "./src/controllers/index.ts":
/*!**********************************!*\
  !*** ./src/controllers/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   index: () => (/* binding */ index)
/* harmony export */ });
const index = async (ctx)=>{
    ctx.body = "DataHive LN1 APIs";
    ctx.status = 200;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmVuZXRlci9XRC93b3JrcGxhY2UtLWRhdGFoaXYzL2xuMS9zZXJ2aWNlcy9zcmMvY29udHJvbGxlcnMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS29hQ29udGV4dCB9IGZyb20gXCIuLi9nbG9iYWxcIjtcblxuZXhwb3J0IGNvbnN0IGluZGV4ID0gYXN5bmMgKGN0eDogS29hQ29udGV4dCkgPT4ge1xuICBjdHguYm9keSA9IFwiRGF0YUhpdmUgTE4xIEFQSXNcIjtcbiAgY3R4LnN0YXR1cyA9IDIwMDtcbn07XG4iXSwibmFtZXMiOlsiaW5kZXgiLCJjdHgiLCJib2R5Iiwic3RhdHVzIl0sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLE1BQU1BLFFBQVEsT0FBT0M7SUFDMUJBLElBQUlDLElBQUksR0FBRztJQUNYRCxJQUFJRSxNQUFNLEdBQUc7QUFDZixFQUFFIn0=

/***/ }),

/***/ "./src/cron/index.ts":
/*!***************************!*\
  !*** ./src/cron/index.ts ***!
  \***************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cronInit: () => (/* binding */ cronInit)
/* harmony export */ });
/* harmony import */ var _monitors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../monitors */ "./src/monitors/index.ts");
/* harmony import */ var _services_cron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cron */ "./src/services/cron.ts");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/log */ "./src/utils/log.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_monitors__WEBPACK_IMPORTED_MODULE_0__]);
_monitors__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const cronInit = ()=>{
    // https://crontab.cronhub.io/
    if (process.env.START_CRON !== "true") {
        _utils_log__WEBPACK_IMPORTED_MODULE_2__["default"].info({
            thread: "cron",
            message: "do not start cron"
        });
        return;
    }
    // monitor
    const monitor = (0,_services_cron__WEBPACK_IMPORTED_MODULE_1__.createCron)(`0/15 * * * * *`, function() {
        _utils_log__WEBPACK_IMPORTED_MODULE_2__["default"].info({
            thread: "cron",
            type: `Monitor every 15 seconds`
        });
        try {
            (0,_monitors__WEBPACK_IMPORTED_MODULE_0__.initMonitor)();
        } catch (e) {
            _utils_log__WEBPACK_IMPORTED_MODULE_2__["default"].info({
                thread: "cron",
                type: `Monitor every 15 seconds`,
                error: e
            });
        }
    });
    (()=>{
        // monitor
        monitor.start();
        _utils_log__WEBPACK_IMPORTED_MODULE_2__["default"].info({
            thread: "cron",
            message: "production cron started"
        });
    })();
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmVuZXRlci9XRC93b3JrcGxhY2UtLWRhdGFoaXYzL2xuMS9zZXJ2aWNlcy9zcmMvY3Jvbi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0TW9uaXRvciB9IGZyb20gXCIuLi9tb25pdG9yc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ3JvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jcm9uXCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCIuLi91dGlscy9sb2dcIjtcblxuZXhwb3J0IGNvbnN0IGNyb25Jbml0ID0gKCkgPT4ge1xuICAvLyBodHRwczovL2Nyb250YWIuY3Jvbmh1Yi5pby9cbiAgaWYgKHByb2Nlc3MuZW52LlNUQVJUX0NST04gIT09IFwidHJ1ZVwiKSB7XG4gICAgbG9nZ2VyLmluZm8oeyB0aHJlYWQ6IFwiY3JvblwiLCBtZXNzYWdlOiBcImRvIG5vdCBzdGFydCBjcm9uXCIgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gbW9uaXRvclxuICBjb25zdCBtb25pdG9yID0gY3JlYXRlQ3JvbihgMC8xNSAqICogKiAqICpgLCBmdW5jdGlvbiAoKSB7XG4gICAgbG9nZ2VyLmluZm8oeyB0aHJlYWQ6IFwiY3JvblwiLCB0eXBlOiBgTW9uaXRvciBldmVyeSAxNSBzZWNvbmRzYCB9KTtcbiAgICB0cnkge1xuICAgICAgaW5pdE1vbml0b3IoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2dnZXIuaW5mbyh7IHRocmVhZDogXCJjcm9uXCIsIHR5cGU6IGBNb25pdG9yIGV2ZXJ5IDE1IHNlY29uZHNgLCBlcnJvcjogZSB9KTtcbiAgICB9XG4gIH0pO1xuXG4gICgoKSA9PiB7XG4gICAgLy8gbW9uaXRvclxuICAgIG1vbml0b3Iuc3RhcnQoKTtcblxuICAgIGxvZ2dlci5pbmZvKHsgdGhyZWFkOiBcImNyb25cIiwgbWVzc2FnZTogXCJwcm9kdWN0aW9uIGNyb24gc3RhcnRlZFwiIH0pO1xuICB9KSgpO1xufTtcbiJdLCJuYW1lcyI6WyJpbml0TW9uaXRvciIsImNyZWF0ZUNyb24iLCJsb2dnZXIiLCJjcm9uSW5pdCIsInByb2Nlc3MiLCJlbnYiLCJTVEFSVF9DUk9OIiwiaW5mbyIsInRocmVhZCIsIm1lc3NhZ2UiLCJtb25pdG9yIiwidHlwZSIsImUiLCJlcnJvciIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxXQUFXLFFBQVEsY0FBYztBQUMxQyxTQUFTQyxVQUFVLFFBQVEsbUJBQW1CO0FBQzlDLE9BQU9DLFlBQVksZUFBZTtBQUVsQyxPQUFPLE1BQU1DLFdBQVc7SUFDdEIsOEJBQThCO0lBQzlCLElBQUlDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxLQUFLLFFBQVE7UUFDckNKLE9BQU9LLElBQUksQ0FBQztZQUFFQyxRQUFRO1lBQVFDLFNBQVM7UUFBb0I7UUFDM0Q7SUFDRjtJQUVBLFVBQVU7SUFDVixNQUFNQyxVQUFVVCxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQUU7UUFDM0NDLE9BQU9LLElBQUksQ0FBQztZQUFFQyxRQUFRO1lBQVFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztRQUFDO1FBQy9ELElBQUk7WUFDRlg7UUFDRixFQUFFLE9BQU9ZLEdBQUc7WUFDVlYsT0FBT0ssSUFBSSxDQUFDO2dCQUFFQyxRQUFRO2dCQUFRRyxNQUFNLENBQUMsd0JBQXdCLENBQUM7Z0JBQUVFLE9BQU9EO1lBQUU7UUFDM0U7SUFDRjtJQUVDLENBQUE7UUFDQyxVQUFVO1FBQ1ZGLFFBQVFJLEtBQUs7UUFFYlosT0FBT0ssSUFBSSxDQUFDO1lBQUVDLFFBQVE7WUFBUUMsU0FBUztRQUEwQjtJQUNuRSxDQUFBO0FBQ0YsRUFBRSJ9
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/db/collName.ts":
/*!****************************!*\
  !*** ./src/db/collName.ts ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DbModel: () => (/* binding */ DbModel),
/* harmony export */   createDBCollName: () => (/* binding */ createDBCollName)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/db/index.ts");

const createDBCollName = (prefix, name)=>{
    return `${prefix}__${name}`;
};
class DbModel {
    databaseName;
    db;
    constructor(databaseName){
        this.databaseName = databaseName;
        this.db = ___WEBPACK_IMPORTED_MODULE_0__.client.db(databaseName);
    }
    createCollectionName(collectionName) {
        return createDBCollName(this.databaseName, collectionName);
    }
    async createCollection(collectionName, isTimeSeries = false) {
        if (isTimeSeries) {
            const collections = await this.db.listCollections({
                name: collectionName
            }, {
                nameOnly: true
            }).toArray();
            const existed = collections.some((name)=>name.name === collectionName);
            if (!existed) {
                return await this.db.createCollection(collectionName, {
                    timeseries: {
                        timeField: "timestamp",
                        metaField: "metadata",
                        granularity: "seconds"
                    }
                });
            } else {
                return this.db.collection(collectionName);
            }
        }
        const collection = this.db.collection(this.createCollectionName(collectionName));
        return collection;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmVuZXRlci9XRC93b3JrcGxhY2UtLWRhdGFoaXYzL2xuMS9zZXJ2aWNlcy9zcmMvZGIvY29sbE5hbWUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGIgfSBmcm9tIFwibW9uZ29kYlwiO1xuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIi5cIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZURCQ29sbE5hbWUgPSAocHJlZml4OiBzdHJpbmcsIG5hbWU6IHN0cmluZykgPT4ge1xuICByZXR1cm4gYCR7cHJlZml4fV9fJHtuYW1lfWA7XG59O1xuXG5leHBvcnQgY2xhc3MgRGJNb2RlbCB7XG4gIHB1YmxpYyBkYXRhYmFzZU5hbWU6IHN0cmluZztcbiAgcHVibGljIGRiOiBEYjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YWJhc2VOYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRhdGFiYXNlTmFtZSA9IGRhdGFiYXNlTmFtZTtcbiAgICB0aGlzLmRiID0gY2xpZW50LmRiKGRhdGFiYXNlTmFtZSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUNvbGxlY3Rpb25OYW1lKGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gY3JlYXRlREJDb2xsTmFtZSh0aGlzLmRhdGFiYXNlTmFtZSwgY29sbGVjdGlvbk5hbWUpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGNyZWF0ZUNvbGxlY3Rpb248VD4oY29sbGVjdGlvbk5hbWU6IHN0cmluZywgaXNUaW1lU2VyaWVzOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBpZiAoaXNUaW1lU2VyaWVzKSB7XG4gICAgICBjb25zdCBjb2xsZWN0aW9ucyA9IGF3YWl0IHRoaXMuZGIubGlzdENvbGxlY3Rpb25zKHsgbmFtZTogY29sbGVjdGlvbk5hbWUgfSwgeyBuYW1lT25seTogdHJ1ZSB9KS50b0FycmF5KCk7XG4gICAgICBjb25zdCBleGlzdGVkID0gY29sbGVjdGlvbnMuc29tZSgobmFtZSkgPT4gbmFtZS5uYW1lID09PSBjb2xsZWN0aW9uTmFtZSk7XG5cbiAgICAgIGlmICghZXhpc3RlZCkge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5kYi5jcmVhdGVDb2xsZWN0aW9uPFQ+KGNvbGxlY3Rpb25OYW1lLCB7XG4gICAgICAgICAgdGltZXNlcmllczoge1xuICAgICAgICAgICAgdGltZUZpZWxkOiBcInRpbWVzdGFtcFwiLFxuICAgICAgICAgICAgbWV0YUZpZWxkOiBcIm1ldGFkYXRhXCIsXG4gICAgICAgICAgICBncmFudWxhcml0eTogXCJzZWNvbmRzXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5kYi5jb2xsZWN0aW9uPFQ+KGNvbGxlY3Rpb25OYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb2xsZWN0aW9uID0gdGhpcy5kYi5jb2xsZWN0aW9uPFQ+KHRoaXMuY3JlYXRlQ29sbGVjdGlvbk5hbWUoY29sbGVjdGlvbk5hbWUpKTtcblxuICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiY2xpZW50IiwiY3JlYXRlREJDb2xsTmFtZSIsInByZWZpeCIsIm5hbWUiLCJEYk1vZGVsIiwiZGF0YWJhc2VOYW1lIiwiZGIiLCJjcmVhdGVDb2xsZWN0aW9uTmFtZSIsImNvbGxlY3Rpb25OYW1lIiwiY3JlYXRlQ29sbGVjdGlvbiIsImlzVGltZVNlcmllcyIsImNvbGxlY3Rpb25zIiwibGlzdENvbGxlY3Rpb25zIiwibmFtZU9ubHkiLCJ0b0FycmF5IiwiZXhpc3RlZCIsInNvbWUiLCJ0aW1lc2VyaWVzIiwidGltZUZpZWxkIiwibWV0YUZpZWxkIiwiZ3JhbnVsYXJpdHkiLCJjb2xsZWN0aW9uIl0sIm1hcHBpbmdzIjoiQUFDQSxTQUFTQSxNQUFNLFFBQVEsSUFBSTtBQUUzQixPQUFPLE1BQU1DLG1CQUFtQixDQUFDQyxRQUFnQkM7SUFDL0MsT0FBTyxDQUFDLEVBQUVELE9BQU8sRUFBRSxFQUFFQyxLQUFLLENBQUM7QUFDN0IsRUFBRTtBQUVGLE9BQU8sTUFBTUM7SUFDSkMsYUFBcUI7SUFDckJDLEdBQU87SUFFZCxZQUFtQkQsWUFBb0IsQ0FBRTtRQUN2QyxJQUFJLENBQUNBLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxFQUFFLEdBQUdOLE9BQU9NLEVBQUUsQ0FBQ0Q7SUFDdEI7SUFFUUUscUJBQXFCQyxjQUFzQixFQUFFO1FBQ25ELE9BQU9QLGlCQUFpQixJQUFJLENBQUNJLFlBQVksRUFBRUc7SUFDN0M7SUFFQSxNQUFhQyxpQkFBb0JELGNBQXNCLEVBQUVFLGVBQXdCLEtBQUssRUFBRTtRQUN0RixJQUFJQSxjQUFjO1lBQ2hCLE1BQU1DLGNBQWMsTUFBTSxJQUFJLENBQUNMLEVBQUUsQ0FBQ00sZUFBZSxDQUFDO2dCQUFFVCxNQUFNSztZQUFlLEdBQUc7Z0JBQUVLLFVBQVU7WUFBSyxHQUFHQyxPQUFPO1lBQ3ZHLE1BQU1DLFVBQVVKLFlBQVlLLElBQUksQ0FBQyxDQUFDYixPQUFTQSxLQUFLQSxJQUFJLEtBQUtLO1lBRXpELElBQUksQ0FBQ08sU0FBUztnQkFDWixPQUFPLE1BQU0sSUFBSSxDQUFDVCxFQUFFLENBQUNHLGdCQUFnQixDQUFJRCxnQkFBZ0I7b0JBQ3ZEUyxZQUFZO3dCQUNWQyxXQUFXO3dCQUNYQyxXQUFXO3dCQUNYQyxhQUFhO29CQUNmO2dCQUNGO1lBQ0YsT0FBTztnQkFDTCxPQUFPLElBQUksQ0FBQ2QsRUFBRSxDQUFDZSxVQUFVLENBQUliO1lBQy9CO1FBQ0Y7UUFFQSxNQUFNYSxhQUFhLElBQUksQ0FBQ2YsRUFBRSxDQUFDZSxVQUFVLENBQUksSUFBSSxDQUFDZCxvQkFBb0IsQ0FBQ0M7UUFFbkUsT0FBT2E7SUFDVDtBQUNGIn0=

/***/ }),

/***/ "./src/db/index.ts":
/*!*************************!*\
  !*** ./src/db/index.ts ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   client: () => (/* binding */ client)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config/index.ts");


const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(_config__WEBPACK_IMPORTED_MODULE_1__.mongodbUrl);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmVuZXRlci9XRC93b3JrcGxhY2UtLWRhdGFoaXYzL2xuMS9zZXJ2aWNlcy9zcmMvZGIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuaW1wb3J0IHsgbW9uZ29kYlVybCB9IGZyb20gXCIuLi9jb25maWdcIjtcblxuZXhwb3J0IGNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudChtb25nb2RiVXJsKTtcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsIm1vbmdvZGJVcmwiLCJjbGllbnQiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFdBQVcsUUFBUSxVQUFVO0FBQ3RDLFNBQVNDLFVBQVUsUUFBUSxZQUFZO0FBRXZDLE9BQU8sTUFBTUMsU0FBUyxJQUFJRixZQUFZQyxZQUFZIn0=

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @koa/router */ "@koa/router");
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa */ "koa");
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-bodyparser */ "koa-bodyparser");
/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-helmet */ "koa-helmet");
/* harmony import */ var koa_pino_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-pino-logger */ "koa-pino-logger");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./src/config/index.ts");
/* harmony import */ var _controllers_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controllers/index */ "./src/controllers/index.ts");
/* harmony import */ var _cron_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cron/index */ "./src/cron/index.ts");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./db */ "./src/db/index.ts");
/* harmony import */ var _middlewares_cache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./middlewares/cache */ "./src/middlewares/cache.ts");
/* harmony import */ var _middlewares_cors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./middlewares/cors */ "./src/middlewares/cors.ts");
/* harmony import */ var _middlewares_dateRange__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./middlewares/dateRange */ "./src/middlewares/dateRange.ts");
/* harmony import */ var _middlewares_evmAdmin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./middlewares/evmAdmin */ "./src/middlewares/evmAdmin.ts");
/* harmony import */ var _middlewares_init__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./middlewares/init */ "./src/middlewares/init.ts");
/* harmony import */ var _middlewares_limiter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./middlewares/limiter */ "./src/middlewares/limiter.ts");
/* harmony import */ var _middlewares_notFound__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./middlewares/notFound */ "./src/middlewares/notFound.ts");
/* harmony import */ var _middlewares_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./middlewares/page */ "./src/middlewares/page.ts");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/log */ "./src/utils/log.ts");
/* harmony import */ var _utils_production__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utils/production */ "./src/utils/production.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_cron_index__WEBPACK_IMPORTED_MODULE_7__]);
_cron_index__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



















// create app
const app = new koa__WEBPACK_IMPORTED_MODULE_1__();
app.use(_middlewares_init__WEBPACK_IMPORTED_MODULE_13__.init);
app.use(_middlewares_cache__WEBPACK_IMPORTED_MODULE_9__.cacheMiddleware);
if (_config__WEBPACK_IMPORTED_MODULE_5__.isProduction) app.use(koa_pino_logger__WEBPACK_IMPORTED_MODULE_4__());
app.use(koa_helmet__WEBPACK_IMPORTED_MODULE_3__());
app.use(koa_helmet__WEBPACK_IMPORTED_MODULE_3__.hidePoweredBy());
app.use(_middlewares_cors__WEBPACK_IMPORTED_MODULE_10__.corsMiddleware);
app.use(koa_bodyparser__WEBPACK_IMPORTED_MODULE_2__({
    formLimit: "50mb"
}));
app.use(_middlewares_evmAdmin__WEBPACK_IMPORTED_MODULE_12__.evmAdmin);
// db
await _db__WEBPACK_IMPORTED_MODULE_8__.client.connect();
_db__WEBPACK_IMPORTED_MODULE_8__.client.on("close", ()=>_db__WEBPACK_IMPORTED_MODULE_8__.client.connect());
// app router
const router = new _koa_router__WEBPACK_IMPORTED_MODULE_0__({
    prefix: "/v1"
});
router.use(_middlewares_dateRange__WEBPACK_IMPORTED_MODULE_11__.dateRangeMiddleware);
router.use(_middlewares_page__WEBPACK_IMPORTED_MODULE_16__.paginationMiddleware);
// root
router.get("/", _controllers_index__WEBPACK_IMPORTED_MODULE_6__.index);
app.use(router.routes());
app.use(router.allowedMethods());
// /app router
app.use(_middlewares_limiter__WEBPACK_IMPORTED_MODULE_14__.limiter);
app.use(_middlewares_notFound__WEBPACK_IMPORTED_MODULE_15__.notFound);
const port = (0,_utils_production__WEBPACK_IMPORTED_MODULE_18__.production)(3000, 3030);
// app
app.listen(port, (0,_utils_production__WEBPACK_IMPORTED_MODULE_18__.production)("0.0.0.0", "127.0.0.1"));
// app info
_utils_log__WEBPACK_IMPORTED_MODULE_17__["default"].info({
    thread: "main",
    data: "service started",
    port
});
(0,_cron_index__WEBPACK_IMPORTED_MODULE_7__.cronInit)();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmVuZXRlci9XRC93b3JrcGxhY2UtLWRhdGFoaXYzL2xuMS9zZXJ2aWNlcy9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gXCJAa29hL3JvdXRlclwiO1xuaW1wb3J0IEtvYSBmcm9tIFwia29hXCI7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tIFwia29hLWJvZHlwYXJzZXJcIjtcbmltcG9ydCBoZWxtZXQgZnJvbSBcImtvYS1oZWxtZXRcIjtcbmltcG9ydCBrb2FMb2dnZXIgZnJvbSBcImtvYS1waW5vLWxvZ2dlclwiO1xuaW1wb3J0IHsgaXNQcm9kdWN0aW9uIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBpbmRleCB9IGZyb20gXCIuL2NvbnRyb2xsZXJzL2luZGV4XCI7XG5pbXBvcnQgeyBjcm9uSW5pdCB9IGZyb20gXCIuL2Nyb24vaW5kZXhcIjtcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gXCIuL2RiXCI7XG5pbXBvcnQgeyBjYWNoZU1pZGRsZXdhcmUgfSBmcm9tIFwiLi9taWRkbGV3YXJlcy9jYWNoZVwiO1xuaW1wb3J0IHsgY29yc01pZGRsZXdhcmUgfSBmcm9tIFwiLi9taWRkbGV3YXJlcy9jb3JzXCI7XG5pbXBvcnQgeyBkYXRlUmFuZ2VNaWRkbGV3YXJlIH0gZnJvbSBcIi4vbWlkZGxld2FyZXMvZGF0ZVJhbmdlXCI7XG5pbXBvcnQgeyBldm1BZG1pbiB9IGZyb20gXCIuL21pZGRsZXdhcmVzL2V2bUFkbWluXCI7XG5pbXBvcnQgeyBpbml0IH0gZnJvbSBcIi4vbWlkZGxld2FyZXMvaW5pdFwiO1xuaW1wb3J0IHsgbGltaXRlciB9IGZyb20gXCIuL21pZGRsZXdhcmVzL2xpbWl0ZXJcIjtcbmltcG9ydCB7IG5vdEZvdW5kIH0gZnJvbSBcIi4vbWlkZGxld2FyZXMvbm90Rm91bmRcIjtcbmltcG9ydCB7IHBhZ2luYXRpb25NaWRkbGV3YXJlIH0gZnJvbSBcIi4vbWlkZGxld2FyZXMvcGFnZVwiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi91dGlscy9sb2dcIjtcbmltcG9ydCB7IHByb2R1Y3Rpb24gfSBmcm9tIFwiLi91dGlscy9wcm9kdWN0aW9uXCI7XG5cbi8vIGNyZWF0ZSBhcHBcbmNvbnN0IGFwcCA9IG5ldyBLb2EoKTtcblxuYXBwLnVzZShpbml0KTtcbmFwcC51c2UoY2FjaGVNaWRkbGV3YXJlKTtcbmlmIChpc1Byb2R1Y3Rpb24pIGFwcC51c2Uoa29hTG9nZ2VyKCkpO1xuYXBwLnVzZShoZWxtZXQoKSk7XG5hcHAudXNlKGhlbG1ldC5oaWRlUG93ZXJlZEJ5KCkpO1xuYXBwLnVzZShjb3JzTWlkZGxld2FyZSk7XG5hcHAudXNlKGJvZHlQYXJzZXIoeyBmb3JtTGltaXQ6IFwiNTBtYlwiIH0pKTtcbmFwcC51c2UoZXZtQWRtaW4pO1xuXG4vLyBkYlxuYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcbmNsaWVudC5vbihcImNsb3NlXCIsICgpID0+IGNsaWVudC5jb25uZWN0KCkpO1xuXG4vLyBhcHAgcm91dGVyXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKHsgcHJlZml4OiBcIi92MVwiIH0pO1xuXG5yb3V0ZXIudXNlKGRhdGVSYW5nZU1pZGRsZXdhcmUpO1xucm91dGVyLnVzZShwYWdpbmF0aW9uTWlkZGxld2FyZSk7XG5cbi8vIHJvb3RcbnJvdXRlci5nZXQoXCIvXCIsIGluZGV4KTtcblxuYXBwLnVzZShyb3V0ZXIucm91dGVzKCkpO1xuYXBwLnVzZShyb3V0ZXIuYWxsb3dlZE1ldGhvZHMoKSk7XG4vLyAvYXBwIHJvdXRlclxuXG5hcHAudXNlKGxpbWl0ZXIpO1xuYXBwLnVzZShub3RGb3VuZCk7XG5cbmNvbnN0IHBvcnQgPSBwcm9kdWN0aW9uKDMwMDAsIDMwMzApO1xuXG4vLyBhcHBcbmFwcC5saXN0ZW4ocG9ydCwgcHJvZHVjdGlvbihcIjAuMC4wLjBcIiwgXCIxMjcuMC4wLjFcIikpO1xuXG4vLyBhcHAgaW5mb1xubG9nZ2VyLmluZm8oeyB0aHJlYWQ6IFwibWFpblwiLCBkYXRhOiBcInNlcnZpY2Ugc3RhcnRlZFwiLCBwb3J0IH0pO1xuXG5jcm9uSW5pdCgpO1xuIl0sIm5hbWVzIjpbIlJvdXRlciIsIktvYSIsImJvZHlQYXJzZXIiLCJoZWxtZXQiLCJrb2FMb2dnZXIiLCJpc1Byb2R1Y3Rpb24iLCJpbmRleCIsImNyb25Jbml0IiwiY2xpZW50IiwiY2FjaGVNaWRkbGV3YXJlIiwiY29yc01pZGRsZXdhcmUiLCJkYXRlUmFuZ2VNaWRkbGV3YXJlIiwiZXZtQWRtaW4iLCJpbml0IiwibGltaXRlciIsIm5vdEZvdW5kIiwicGFnaW5hdGlvbk1pZGRsZXdhcmUiLCJsb2dnZXIiLCJwcm9kdWN0aW9uIiwiYXBwIiwidXNlIiwiaGlkZVBvd2VyZWRCeSIsImZvcm1MaW1pdCIsImNvbm5lY3QiLCJvbiIsInJvdXRlciIsInByZWZpeCIsImdldCIsInJvdXRlcyIsImFsbG93ZWRNZXRob2RzIiwicG9ydCIsImxpc3RlbiIsImluZm8iLCJ0aHJlYWQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxZQUFZLGNBQWM7QUFDakMsT0FBT0MsU0FBUyxNQUFNO0FBQ3RCLE9BQU9DLGdCQUFnQixpQkFBaUI7QUFDeEMsT0FBT0MsWUFBWSxhQUFhO0FBQ2hDLE9BQU9DLGVBQWUsa0JBQWtCO0FBQ3hDLFNBQVNDLFlBQVksUUFBUSxXQUFXO0FBQ3hDLFNBQVNDLEtBQUssUUFBUSxzQkFBc0I7QUFDNUMsU0FBU0MsUUFBUSxRQUFRLGVBQWU7QUFDeEMsU0FBU0MsTUFBTSxRQUFRLE9BQU87QUFDOUIsU0FBU0MsZUFBZSxRQUFRLHNCQUFzQjtBQUN0RCxTQUFTQyxjQUFjLFFBQVEscUJBQXFCO0FBQ3BELFNBQVNDLG1CQUFtQixRQUFRLDBCQUEwQjtBQUM5RCxTQUFTQyxRQUFRLFFBQVEseUJBQXlCO0FBQ2xELFNBQVNDLElBQUksUUFBUSxxQkFBcUI7QUFDMUMsU0FBU0MsT0FBTyxRQUFRLHdCQUF3QjtBQUNoRCxTQUFTQyxRQUFRLFFBQVEseUJBQXlCO0FBQ2xELFNBQVNDLG9CQUFvQixRQUFRLHFCQUFxQjtBQUMxRCxPQUFPQyxZQUFZLGNBQWM7QUFDakMsU0FBU0MsVUFBVSxRQUFRLHFCQUFxQjtBQUVoRCxhQUFhO0FBQ2IsTUFBTUMsTUFBTSxJQUFJbEI7QUFFaEJrQixJQUFJQyxHQUFHLENBQUNQO0FBQ1JNLElBQUlDLEdBQUcsQ0FBQ1g7QUFDUixJQUFJSixjQUFjYyxJQUFJQyxHQUFHLENBQUNoQjtBQUMxQmUsSUFBSUMsR0FBRyxDQUFDakI7QUFDUmdCLElBQUlDLEdBQUcsQ0FBQ2pCLE9BQU9rQixhQUFhO0FBQzVCRixJQUFJQyxHQUFHLENBQUNWO0FBQ1JTLElBQUlDLEdBQUcsQ0FBQ2xCLFdBQVc7SUFBRW9CLFdBQVc7QUFBTztBQUN2Q0gsSUFBSUMsR0FBRyxDQUFDUjtBQUVSLEtBQUs7QUFDTCxNQUFNSixPQUFPZSxPQUFPO0FBQ3BCZixPQUFPZ0IsRUFBRSxDQUFDLFNBQVMsSUFBTWhCLE9BQU9lLE9BQU87QUFFdkMsYUFBYTtBQUNiLE1BQU1FLFNBQVMsSUFBSXpCLE9BQU87SUFBRTBCLFFBQVE7QUFBTTtBQUUxQ0QsT0FBT0wsR0FBRyxDQUFDVDtBQUNYYyxPQUFPTCxHQUFHLENBQUNKO0FBRVgsT0FBTztBQUNQUyxPQUFPRSxHQUFHLENBQUMsS0FBS3JCO0FBRWhCYSxJQUFJQyxHQUFHLENBQUNLLE9BQU9HLE1BQU07QUFDckJULElBQUlDLEdBQUcsQ0FBQ0ssT0FBT0ksY0FBYztBQUM3QixjQUFjO0FBRWRWLElBQUlDLEdBQUcsQ0FBQ047QUFDUkssSUFBSUMsR0FBRyxDQUFDTDtBQUVSLE1BQU1lLE9BQU9aLFdBQVcsTUFBTTtBQUU5QixNQUFNO0FBQ05DLElBQUlZLE1BQU0sQ0FBQ0QsTUFBTVosV0FBVyxXQUFXO0FBRXZDLFdBQVc7QUFDWEQsT0FBT2UsSUFBSSxDQUFDO0lBQUVDLFFBQVE7SUFBUUMsTUFBTTtJQUFtQko7QUFBSztBQUU1RHZCIn0=
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/middlewares/cache.ts":
/*!**********************************!*\
  !*** ./src/middlewares/cache.ts ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheMiddleware: () => (/* binding */ cacheMiddleware)
/* harmony export */ });
/* harmony import */ var koa_cash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-cash */ "koa-cash");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lru-cache */ "lru-cache");
/* harmony import */ var _utils_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/cache */ "./src/utils/cache.ts");



const cache = new lru_cache__WEBPACK_IMPORTED_MODULE_1__.LRUCache(_utils_cache__WEBPACK_IMPORTED_MODULE_2__.cacheOptions);
const cacheMiddleware = koa_cash__WEBPACK_IMPORTED_MODULE_0__({
    get: async (key)=>{
        return cache.get(key);
    },
    set: async (key, value)=>{
        cache.set(key, value);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmVuZXRlci9XRC93b3JrcGxhY2UtLWRhdGFoaXYzL2xuMS9zZXJ2aWNlcy9zcmMvbWlkZGxld2FyZXMvY2FjaGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGtvYUNhc2ggZnJvbSBcImtvYS1jYXNoXCI7XG5pbXBvcnQgeyBMUlVDYWNoZSB9IGZyb20gXCJscnUtY2FjaGVcIjtcbmltcG9ydCB7IGNhY2hlT3B0aW9ucyB9IGZyb20gXCIuLi91dGlscy9jYWNoZVwiO1xuXG5jb25zdCBjYWNoZSA9IG5ldyBMUlVDYWNoZShjYWNoZU9wdGlvbnMpO1xuXG5leHBvcnQgY29uc3QgY2FjaGVNaWRkbGV3YXJlID0ga29hQ2FzaCh7XG4gIGdldDogYXN5bmMgKGtleSkgPT4ge1xuICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgfSxcbiAgc2V0OiBhc3luYyA8VD4oa2V5OiBzdHJpbmcsIHZhbHVlOiBUKSA9PiB7XG4gICAgY2FjaGUuc2V0KGtleSwgdmFsdWUpO1xuICB9LFxufSk7XG4iXSwibmFtZXMiOlsia29hQ2FzaCIsIkxSVUNhY2hlIiwiY2FjaGVPcHRpb25zIiwiY2FjaGUiLCJjYWNoZU1pZGRsZXdhcmUiLCJnZXQiLCJrZXkiLCJzZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsYUFBYSxXQUFXO0FBQy9CLFNBQVNDLFFBQVEsUUFBUSxZQUFZO0FBQ3JDLFNBQVNDLFlBQVksUUFBUSxpQkFBaUI7QUFFOUMsTUFBTUMsUUFBUSxJQUFJRixTQUFTQztBQUUzQixPQUFPLE1BQU1FLGtCQUFrQkosUUFBUTtJQUNyQ0ssS0FBSyxPQUFPQztRQUNWLE9BQU9ILE1BQU1FLEdBQUcsQ0FBQ0M7SUFDbkI7SUFDQUMsS0FBSyxPQUFVRCxLQUFhRTtRQUMxQkwsTUFBTUksR0FBRyxDQUFDRCxLQUFLRTtJQUNqQjtBQUNGLEdBQUcifQ==

/***/ }),

/***/ "./src/middlewares/cors.ts":
/*!*********************************!*\
  !*** ./src/middlewares/cors.ts ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   corsMiddleware: () => (/* binding */ corsMiddleware)
/* harmony export */ });
/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @koa/cors */ "@koa/cors");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config/index.ts");


const crosProductionDomains = [
    "datahive.p10node.com"
];
const crosStagingDomains = [
    "staging-*.datahive.p10node.com"
];
const isDev = !_config__WEBPACK_IMPORTED_MODULE_1__.isProduction;
const crosDevDomains = [
    "localhost"
];
const corsMiddleware = _koa_cors__WEBPACK_IMPORTED_MODULE_0__({
    origin: (ctx)=>{
        const validDomains = isDev ? crosDevDomains : _config__WEBPACK_IMPORTED_MODULE_1__.isStaging ? crosStagingDomains : crosProductionDomains;
        if (validDomains.indexOf(ctx.request.header.origin) !== -1) {
            return ctx.request.header.origin || "";
        }
        return "";
    },
    credentials: true
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmVuZXRlci9XRC93b3JrcGxhY2UtLWRhdGFoaXYzL2xuMS9zZXJ2aWNlcy9zcmMvbWlkZGxld2FyZXMvY29ycy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ycyBmcm9tIFwiQGtvYS9jb3JzXCI7XG5pbXBvcnQgeyBpc1Byb2R1Y3Rpb24sIGlzU3RhZ2luZyB9IGZyb20gXCIuLi9jb25maWdcIjtcblxuY29uc3QgY3Jvc1Byb2R1Y3Rpb25Eb21haW5zID0gW1wiZGF0YWhpdmUucDEwbm9kZS5jb21cIl07XG5jb25zdCBjcm9zU3RhZ2luZ0RvbWFpbnMgPSBbXCJzdGFnaW5nLSouZGF0YWhpdmUucDEwbm9kZS5jb21cIl07XG5cbmNvbnN0IGlzRGV2ID0gIWlzUHJvZHVjdGlvbjtcblxuY29uc3QgY3Jvc0RldkRvbWFpbnMgPSBbXCJsb2NhbGhvc3RcIl07XG5cbmV4cG9ydCBjb25zdCBjb3JzTWlkZGxld2FyZSA9IGNvcnMoe1xuICBvcmlnaW46IChjdHgpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IHZhbGlkRG9tYWlucyA9IGlzRGV2ID8gY3Jvc0RldkRvbWFpbnMgOiBpc1N0YWdpbmcgPyBjcm9zU3RhZ2luZ0RvbWFpbnMgOiBjcm9zUHJvZHVjdGlvbkRvbWFpbnM7XG4gICAgaWYgKHZhbGlkRG9tYWlucy5pbmRleE9mKGN0eC5yZXF1ZXN0LmhlYWRlci5vcmlnaW4hKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBjdHgucmVxdWVzdC5oZWFkZXIub3JpZ2luIHx8IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9LFxuXG4gIGNyZWRlbnRpYWxzOiB0cnVlLFxufSk7XG4iXSwibmFtZXMiOlsiY29ycyIsImlzUHJvZHVjdGlvbiIsImlzU3RhZ2luZyIsImNyb3NQcm9kdWN0aW9uRG9tYWlucyIsImNyb3NTdGFnaW5nRG9tYWlucyIsImlzRGV2IiwiY3Jvc0RldkRvbWFpbnMiLCJjb3JzTWlkZGxld2FyZSIsIm9yaWdpbiIsImN0eCIsInZhbGlkRG9tYWlucyIsImluZGV4T2YiLCJyZXF1ZXN0IiwiaGVhZGVyIiwiY3JlZGVudGlhbHMiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFVBQVUsWUFBWTtBQUM3QixTQUFTQyxZQUFZLEVBQUVDLFNBQVMsUUFBUSxZQUFZO0FBRXBELE1BQU1DLHdCQUF3QjtJQUFDO0NBQXVCO0FBQ3RELE1BQU1DLHFCQUFxQjtJQUFDO0NBQWlDO0FBRTdELE1BQU1DLFFBQVEsQ0FBQ0o7QUFFZixNQUFNSyxpQkFBaUI7SUFBQztDQUFZO0FBRXBDLE9BQU8sTUFBTUMsaUJBQWlCUCxLQUFLO0lBQ2pDUSxRQUFRLENBQUNDO1FBQ1AsTUFBTUMsZUFBZUwsUUFBUUMsaUJBQWlCSixZQUFZRSxxQkFBcUJEO1FBQy9FLElBQUlPLGFBQWFDLE9BQU8sQ0FBQ0YsSUFBSUcsT0FBTyxDQUFDQyxNQUFNLENBQUNMLE1BQU0sTUFBTyxDQUFDLEdBQUc7WUFDM0QsT0FBT0MsSUFBSUcsT0FBTyxDQUFDQyxNQUFNLENBQUNMLE1BQU0sSUFBSTtRQUN0QztRQUNBLE9BQU87SUFDVDtJQUVBTSxhQUFhO0FBQ2YsR0FBRyJ9

/***/ }),

/***/ "./src/middlewares/dateRange.ts":
/*!**************************************!*\
  !*** ./src/middlewares/dateRange.ts ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dateRangeMiddleware: () => (/* binding */ dateRangeMiddleware)
/* harmony export */ });
/* harmony import */ var iso_datestring_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iso-datestring-validator */ "iso-datestring-validator");
/* harmony import */ var _services_dateRange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dateRange */ "./src/services/dateRange.ts");


const dateRangeMiddleware = async (ctx, next)=>{
    const dateRange = new _services_dateRange__WEBPACK_IMPORTED_MODULE_1__.DateRange();
    const from = Array.isArray(ctx.query["fromTime"]) ? ctx.query["fromTime"][0] : ctx.query["fromTime"];
    if (from && (0,iso_datestring_validator__WEBPACK_IMPORTED_MODULE_0__.isValidISODateString)(from)) {
        dateRange.setFrom(from);
    }
    const to = Array.isArray(ctx.query["toTime"]) ? ctx.query["toTime"][0] : ctx.query["toTime"];
    if (to && (0,iso_datestring_validator__WEBPACK_IMPORTED_MODULE_0__.isValidISODateString)(to)) {
        dateRange.setTo(to);
    }
    ctx.dateRange = dateRange;
    await next();
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmVuZXRlci9XRC93b3JrcGxhY2UtLWRhdGFoaXYzL2xuMS9zZXJ2aWNlcy9zcmMvbWlkZGxld2FyZXMvZGF0ZVJhbmdlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzVmFsaWRJU09EYXRlU3RyaW5nIH0gZnJvbSBcImlzby1kYXRlc3RyaW5nLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgRGF0ZVJhbmdlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2RhdGVSYW5nZVwiO1xuaW1wb3J0IEtvYSBmcm9tIFwia29hXCI7XG5pbXBvcnQgeyBLb2FDb250ZXh0IH0gZnJvbSBcIi4uL2dsb2JhbFwiO1xuXG5leHBvcnQgY29uc3QgZGF0ZVJhbmdlTWlkZGxld2FyZSA9IGFzeW5jIChjdHg6IEtvYUNvbnRleHQsIG5leHQ6IEtvYS5OZXh0KSA9PiB7XG4gIGNvbnN0IGRhdGVSYW5nZSA9IG5ldyBEYXRlUmFuZ2UoKTtcbiAgY29uc3QgZnJvbSA9IEFycmF5LmlzQXJyYXkoY3R4LnF1ZXJ5W1wiZnJvbVRpbWVcIl0pID8gY3R4LnF1ZXJ5W1wiZnJvbVRpbWVcIl1bMF0gOiBjdHgucXVlcnlbXCJmcm9tVGltZVwiXTtcbiAgaWYgKGZyb20gJiYgaXNWYWxpZElTT0RhdGVTdHJpbmcoZnJvbSkpIHtcbiAgICBkYXRlUmFuZ2Uuc2V0RnJvbShmcm9tKTtcbiAgfVxuICBjb25zdCB0byA9IEFycmF5LmlzQXJyYXkoY3R4LnF1ZXJ5W1widG9UaW1lXCJdKSA/IGN0eC5xdWVyeVtcInRvVGltZVwiXVswXSA6IGN0eC5xdWVyeVtcInRvVGltZVwiXTtcbiAgaWYgKHRvICYmIGlzVmFsaWRJU09EYXRlU3RyaW5nKHRvKSkge1xuICAgIGRhdGVSYW5nZS5zZXRUbyh0byk7XG4gIH1cblxuICBjdHguZGF0ZVJhbmdlID0gZGF0ZVJhbmdlO1xuICBhd2FpdCBuZXh0KCk7XG59O1xuIl0sIm5hbWVzIjpbImlzVmFsaWRJU09EYXRlU3RyaW5nIiwiRGF0ZVJhbmdlIiwiZGF0ZVJhbmdlTWlkZGxld2FyZSIsImN0eCIsIm5leHQiLCJkYXRlUmFuZ2UiLCJmcm9tIiwiQXJyYXkiLCJpc0FycmF5IiwicXVlcnkiLCJzZXRGcm9tIiwidG8iLCJzZXRUbyJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0Esb0JBQW9CLFFBQVEsMkJBQTJCO0FBQ2hFLFNBQVNDLFNBQVMsUUFBUSx3QkFBd0I7QUFJbEQsT0FBTyxNQUFNQyxzQkFBc0IsT0FBT0MsS0FBaUJDO0lBQ3pELE1BQU1DLFlBQVksSUFBSUo7SUFDdEIsTUFBTUssT0FBT0MsTUFBTUMsT0FBTyxDQUFDTCxJQUFJTSxLQUFLLENBQUMsV0FBVyxJQUFJTixJQUFJTSxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsR0FBR04sSUFBSU0sS0FBSyxDQUFDLFdBQVc7SUFDcEcsSUFBSUgsUUFBUU4scUJBQXFCTSxPQUFPO1FBQ3RDRCxVQUFVSyxPQUFPLENBQUNKO0lBQ3BCO0lBQ0EsTUFBTUssS0FBS0osTUFBTUMsT0FBTyxDQUFDTCxJQUFJTSxLQUFLLENBQUMsU0FBUyxJQUFJTixJQUFJTSxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBR04sSUFBSU0sS0FBSyxDQUFDLFNBQVM7SUFDNUYsSUFBSUUsTUFBTVgscUJBQXFCVyxLQUFLO1FBQ2xDTixVQUFVTyxLQUFLLENBQUNEO0lBQ2xCO0lBRUFSLElBQUlFLFNBQVMsR0FBR0E7SUFDaEIsTUFBTUQ7QUFDUixFQUFFIn0=

/***/ }),

/***/ "./src/middlewares/evmAdmin.ts":
/*!*************************************!*\
  !*** ./src/middlewares/evmAdmin.ts ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evmAdmin: () => (/* binding */ evmAdmin)
/* harmony export */ });
const evmAdmin = async (ctx, next)=>{
    const admins = [].map((item)=>item.toLocaleLowerCase());
    if (admins.includes(ctx.evmAddress)) {
        ctx.isAdmin = true;
    }
    await next();
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmVuZXRlci9XRC93b3JrcGxhY2UtLWRhdGFoaXYzL2xuMS9zZXJ2aWNlcy9zcmMvbWlkZGxld2FyZXMvZXZtQWRtaW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS29hQ29udGV4dCwgS29hTmV4dCB9IGZyb20gXCIuLi9nbG9iYWxcIjtcblxuZXhwb3J0IGNvbnN0IGV2bUFkbWluID0gYXN5bmMgKGN0eDogS29hQ29udGV4dCwgbmV4dDogS29hTmV4dCkgPT4ge1xuICBjb25zdCBhZG1pbnMgPSBbXS5tYXAoKGl0ZW0pID0+IGl0ZW0udG9Mb2NhbGVMb3dlckNhc2UoKSk7XG4gIGlmIChhZG1pbnMuaW5jbHVkZXMoY3R4LmV2bUFkZHJlc3MpKSB7XG4gICAgY3R4LmlzQWRtaW4gPSB0cnVlO1xuICB9XG5cbiAgYXdhaXQgbmV4dCgpO1xufTtcbiJdLCJuYW1lcyI6WyJldm1BZG1pbiIsImN0eCIsIm5leHQiLCJhZG1pbnMiLCJtYXAiLCJpdGVtIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJpbmNsdWRlcyIsImV2bUFkZHJlc3MiLCJpc0FkbWluIl0sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLE1BQU1BLFdBQVcsT0FBT0MsS0FBaUJDO0lBQzlDLE1BQU1DLFNBQVMsRUFBRSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsaUJBQWlCO0lBQ3RELElBQUlILE9BQU9JLFFBQVEsQ0FBQ04sSUFBSU8sVUFBVSxHQUFHO1FBQ25DUCxJQUFJUSxPQUFPLEdBQUc7SUFDaEI7SUFFQSxNQUFNUDtBQUNSLEVBQUUifQ==

/***/ }),

/***/ "./src/middlewares/init.ts":
/*!*********************************!*\
  !*** ./src/middlewares/init.ts ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
const init = async (ctx, next)=>{
    ctx.isAuth = false;
    ctx.isAdmin = false;
    ctx.evmAddress = "";
    await next();
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmVuZXRlci9XRC93b3JrcGxhY2UtLWRhdGFoaXYzL2xuMS9zZXJ2aWNlcy9zcmMvbWlkZGxld2FyZXMvaW5pdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgS29hIGZyb20gXCJrb2FcIjtcbmltcG9ydCB7IEtvYUNvbnRleHQgfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XG5cbmV4cG9ydCBjb25zdCBpbml0ID0gYXN5bmMgKGN0eDogS29hQ29udGV4dCwgbmV4dDogS29hLk5leHQpID0+IHtcbiAgY3R4LmlzQXV0aCA9IGZhbHNlO1xuICBjdHguaXNBZG1pbiA9IGZhbHNlO1xuXG4gIGN0eC5ldm1BZGRyZXNzID0gXCJcIjtcblxuICBhd2FpdCBuZXh0KCk7XG59O1xuIl0sIm5hbWVzIjpbImluaXQiLCJjdHgiLCJuZXh0IiwiaXNBdXRoIiwiaXNBZG1pbiIsImV2bUFkZHJlc3MiXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sTUFBTUEsT0FBTyxPQUFPQyxLQUFpQkM7SUFDMUNELElBQUlFLE1BQU0sR0FBRztJQUNiRixJQUFJRyxPQUFPLEdBQUc7SUFFZEgsSUFBSUksVUFBVSxHQUFHO0lBRWpCLE1BQU1IO0FBQ1IsRUFBRSJ9

/***/ }),

/***/ "./src/middlewares/limiter.ts":
/*!************************************!*\
  !*** ./src/middlewares/limiter.ts ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   limiter: () => (/* binding */ limiter)
/* harmony export */ });
/* harmony import */ var koa2_ratelimit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa2-ratelimit */ "koa2-ratelimit");

const limiter = koa2_ratelimit__WEBPACK_IMPORTED_MODULE_0__.RateLimit.middleware({
    interval: {
        min: 1 * 60 * 1000
    },
    max: 100
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmVuZXRlci9XRC93b3JrcGxhY2UtLWRhdGFoaXYzL2xuMS9zZXJ2aWNlcy9zcmMvbWlkZGxld2FyZXMvbGltaXRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSYXRlTGltaXQgfSBmcm9tIFwia29hMi1yYXRlbGltaXRcIjtcblxuZXhwb3J0IGNvbnN0IGxpbWl0ZXIgPSBSYXRlTGltaXQubWlkZGxld2FyZSh7XG4gIGludGVydmFsOiB7IG1pbjogMSAqIDYwICogMTAwMCB9LCAvLyAxIG1pbnV0ZXMgPSAxKjYwKjEwMDBcbiAgbWF4OiAxMDAsIC8vIGxpbWl0IGVhY2ggSVAgdG8gMTAwIHJlcXVlc3RzIHBlciBpbnRlcnZhbFxufSk7XG4iXSwibmFtZXMiOlsiUmF0ZUxpbWl0IiwibGltaXRlciIsIm1pZGRsZXdhcmUiLCJpbnRlcnZhbCIsIm1pbiIsIm1heCJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsU0FBUyxRQUFRLGlCQUFpQjtBQUUzQyxPQUFPLE1BQU1DLFVBQVVELFVBQVVFLFVBQVUsQ0FBQztJQUMxQ0MsVUFBVTtRQUFFQyxLQUFLLElBQUksS0FBSztJQUFLO0lBQy9CQyxLQUFLO0FBQ1AsR0FBRyJ9

/***/ }),

/***/ "./src/middlewares/notFound.ts":
/*!*************************************!*\
  !*** ./src/middlewares/notFound.ts ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   notFound: () => (/* binding */ notFound)
/* harmony export */ });
/* harmony import */ var _services_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/response */ "./src/services/response.ts");

const notFound = async (ctx)=>{
    ctx.body = (0,_services_response__WEBPACK_IMPORTED_MODULE_0__.errorResponse)("404 Not Found!!1", 404);
    ctx.status = 404;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmVuZXRlci9XRC93b3JrcGxhY2UtLWRhdGFoaXYzL2xuMS9zZXJ2aWNlcy9zcmMvbWlkZGxld2FyZXMvbm90Rm91bmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS29hQ29udGV4dCB9IGZyb20gXCIuLi9nbG9iYWxcIjtcbmltcG9ydCB7IGVycm9yUmVzcG9uc2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcmVzcG9uc2VcIjtcblxuZXhwb3J0IGNvbnN0IG5vdEZvdW5kID0gYXN5bmMgKGN0eDogS29hQ29udGV4dCkgPT4ge1xuICBjdHguYm9keSA9IGVycm9yUmVzcG9uc2UoXCI0MDQgTm90IEZvdW5kISExXCIsIDQwNCk7XG4gIGN0eC5zdGF0dXMgPSA0MDQ7XG59O1xuIl0sIm5hbWVzIjpbImVycm9yUmVzcG9uc2UiLCJub3RGb3VuZCIsImN0eCIsImJvZHkiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiJBQUNBLFNBQVNBLGFBQWEsUUFBUSx1QkFBdUI7QUFFckQsT0FBTyxNQUFNQyxXQUFXLE9BQU9DO0lBQzdCQSxJQUFJQyxJQUFJLEdBQUdILGNBQWMsb0JBQW9CO0lBQzdDRSxJQUFJRSxNQUFNLEdBQUc7QUFDZixFQUFFIn0=

/***/ }),

/***/ "./src/middlewares/page.ts":
/*!*********************************!*\
  !*** ./src/middlewares/page.ts ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   paginationMiddleware: () => (/* binding */ paginationMiddleware)
/* harmony export */ });
const paginationMiddleware = async (ctx, next)=>{
    let page = Number(ctx.query["page"] || 1);
    if (isNaN(page)) {
        page = 1;
    }
    if (page < 1) {
        page = 1;
    }
    let limit = Number(ctx.query["limit"] || 50);
    if (isNaN(limit)) {
        limit = 50;
    }
    if (limit > 200) {
        limit = 200;
    }
    ctx.page = page;
    ctx.limit = limit;
    await next();
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmVuZXRlci9XRC93b3JrcGxhY2UtLWRhdGFoaXYzL2xuMS9zZXJ2aWNlcy9zcmMvbWlkZGxld2FyZXMvcGFnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgS29hIGZyb20gXCJrb2FcIjtcbmltcG9ydCB7IEtvYUNvbnRleHQgfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XG5cbmV4cG9ydCBjb25zdCBwYWdpbmF0aW9uTWlkZGxld2FyZSA9IGFzeW5jIChjdHg6IEtvYUNvbnRleHQsIG5leHQ6IEtvYS5OZXh0KSA9PiB7XG4gIGxldCBwYWdlID0gTnVtYmVyKGN0eC5xdWVyeVtcInBhZ2VcIl0gfHwgMSk7XG4gIGlmIChpc05hTihwYWdlKSkge1xuICAgIHBhZ2UgPSAxO1xuICB9XG4gIGlmIChwYWdlIDwgMSkge1xuICAgIHBhZ2UgPSAxO1xuICB9XG5cbiAgbGV0IGxpbWl0ID0gTnVtYmVyKGN0eC5xdWVyeVtcImxpbWl0XCJdIHx8IDUwKTtcbiAgaWYgKGlzTmFOKGxpbWl0KSkge1xuICAgIGxpbWl0ID0gNTA7XG4gIH1cbiAgaWYgKGxpbWl0ID4gMjAwKSB7XG4gICAgbGltaXQgPSAyMDA7XG4gIH1cbiAgY3R4LnBhZ2UgPSBwYWdlO1xuICBjdHgubGltaXQgPSBsaW1pdDtcblxuICBhd2FpdCBuZXh0KCk7XG59O1xuIl0sIm5hbWVzIjpbInBhZ2luYXRpb25NaWRkbGV3YXJlIiwiY3R4IiwibmV4dCIsInBhZ2UiLCJOdW1iZXIiLCJxdWVyeSIsImlzTmFOIiwibGltaXQiXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sTUFBTUEsdUJBQXVCLE9BQU9DLEtBQWlCQztJQUMxRCxJQUFJQyxPQUFPQyxPQUFPSCxJQUFJSSxLQUFLLENBQUMsT0FBTyxJQUFJO0lBQ3ZDLElBQUlDLE1BQU1ILE9BQU87UUFDZkEsT0FBTztJQUNUO0lBQ0EsSUFBSUEsT0FBTyxHQUFHO1FBQ1pBLE9BQU87SUFDVDtJQUVBLElBQUlJLFFBQVFILE9BQU9ILElBQUlJLEtBQUssQ0FBQyxRQUFRLElBQUk7SUFDekMsSUFBSUMsTUFBTUMsUUFBUTtRQUNoQkEsUUFBUTtJQUNWO0lBQ0EsSUFBSUEsUUFBUSxLQUFLO1FBQ2ZBLFFBQVE7SUFDVjtJQUNBTixJQUFJRSxJQUFJLEdBQUdBO0lBQ1hGLElBQUlNLEtBQUssR0FBR0E7SUFFWixNQUFNTDtBQUNSLEVBQUUifQ==

/***/ }),

/***/ "./src/models/monitor__log.ts":
/*!************************************!*\
  !*** ./src/models/monitor__log.ts ***!
  \************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   monitorDb: () => (/* binding */ monitorDb)
/* harmony export */ });
/* harmony import */ var _db_collName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db/collName */ "./src/db/collName.ts");

const monitorDb = new _db_collName__WEBPACK_IMPORTED_MODULE_0__.DbModel("monitor");
const monitorLogsColl = await monitorDb.createCollection("logs", true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (monitorLogsColl);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmVuZXRlci9XRC93b3JrcGxhY2UtLWRhdGFoaXYzL2xuMS9zZXJ2aWNlcy9zcmMvbW9kZWxzL21vbml0b3JfX2xvZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYk1vZGVsIH0gZnJvbSBcIi4uL2RiL2NvbGxOYW1lXCI7XG5pbXBvcnQgeyBNb25pdG9yTG9nTW9kZWwgfSBmcm9tIFwiLi9tb2RlbFwiO1xuXG5leHBvcnQgY29uc3QgbW9uaXRvckRiID0gbmV3IERiTW9kZWwoXCJtb25pdG9yXCIpO1xuXG5jb25zdCBtb25pdG9yTG9nc0NvbGwgPSBhd2FpdCBtb25pdG9yRGIuY3JlYXRlQ29sbGVjdGlvbjxNb25pdG9yTG9nTW9kZWw+KFwibG9nc1wiLCB0cnVlKTtcbmV4cG9ydCBkZWZhdWx0IG1vbml0b3JMb2dzQ29sbDtcbiJdLCJuYW1lcyI6WyJEYk1vZGVsIiwibW9uaXRvckRiIiwibW9uaXRvckxvZ3NDb2xsIiwiY3JlYXRlQ29sbGVjdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsT0FBTyxRQUFRLGlCQUFpQjtBQUd6QyxPQUFPLE1BQU1DLFlBQVksSUFBSUQsUUFBUSxXQUFXO0FBRWhELE1BQU1FLGtCQUFrQixNQUFNRCxVQUFVRSxnQkFBZ0IsQ0FBa0IsUUFBUTtBQUNsRixlQUFlRCxnQkFBZ0IifQ==
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/monitors/index.ts":
/*!*******************************!*\
  !*** ./src/monitors/index.ts ***!
  \*******************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initMonitor: () => (/* binding */ initMonitor)
/* harmony export */ });
/* harmony import */ var net__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! net */ "net");
/* harmony import */ var _models_monitor_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/monitor__log */ "./src/models/monitor__log.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_models_monitor_log__WEBPACK_IMPORTED_MODULE_1__]);
_models_monitor_log__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const server = {};
const moniServer = async ()=>{
    const serverKeys = Object.keys(server);
    const servers = serverKeys.map((key)=>server[key]);
    await Promise.all(servers.map(async (s)=>{
        const result = await checkport(s.ip, 22);
        let logType = "error";
        if (result === true) {
            logType = "log";
        }
        await _models_monitor_log__WEBPACK_IMPORTED_MODULE_1__["default"].insertOne({
            timestamp: new Date(),
            metadata: {
                type: "server",
                logType
            },
            log: JSON.stringify(result)
        });
    }));
};
const initMonitor = ()=>{
    (()=>{
        moniServer();
    })();
};
const checkport = (host, port)=>{
    return new Promise((resolve)=>{
        const client = new net__WEBPACK_IMPORTED_MODULE_0__.Socket();
        // Try to connect to port
        client.setTimeout(200); // Set timeout of 0.2 seconds
        client.connect(port, host, ()=>{
            client.destroy();
            resolve(true);
        });
        client.on("error", (err)=>{
            client.destroy();
            resolve(`error: ${JSON.stringify(err)}`);
        });
        client.on("timeout", ()=>{
            client.destroy();
            resolve("timeout");
        });
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmVuZXRlci9XRC93b3JrcGxhY2UtLWRhdGFoaXYzL2xuMS9zZXJ2aWNlcy9zcmMvbW9uaXRvcnMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5ldCBmcm9tIFwibmV0XCI7XG5pbXBvcnQgbW9uaXRvckxvZ3NDb2xsIGZyb20gXCIuLi9tb2RlbHMvbW9uaXRvcl9fbG9nXCI7XG5cbnR5cGUgTW9uaXRvclNlcnZlciA9IHtcbiAgaXA6IHN0cmluZztcbn07XG5cbmNvbnN0IHNlcnZlcjogeyBba2V5OiBzdHJpbmddOiBNb25pdG9yU2VydmVyIH0gPSB7fTtcblxuY29uc3QgbW9uaVNlcnZlciA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgc2VydmVyS2V5cyA9IE9iamVjdC5rZXlzKHNlcnZlcik7XG4gIGNvbnN0IHNlcnZlcnMgPSBzZXJ2ZXJLZXlzLm1hcCgoa2V5KSA9PiBzZXJ2ZXJba2V5XSk7XG5cbiAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgc2VydmVycy5tYXAoYXN5bmMgKHMpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNoZWNrcG9ydChzLmlwLCAyMik7XG5cbiAgICAgIGxldCBsb2dUeXBlOiBcImVycm9yXCIgfCBcImxvZ1wiID0gXCJlcnJvclwiO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgICBsb2dUeXBlID0gXCJsb2dcIjtcbiAgICAgIH1cblxuICAgICAgYXdhaXQgbW9uaXRvckxvZ3NDb2xsLmluc2VydE9uZSh7IHRpbWVzdGFtcDogbmV3IERhdGUoKSwgbWV0YWRhdGE6IHsgdHlwZTogXCJzZXJ2ZXJcIiwgbG9nVHlwZSB9LCBsb2c6IEpTT04uc3RyaW5naWZ5KHJlc3VsdCkgfSk7XG4gICAgfSksXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgaW5pdE1vbml0b3IgPSAoKSA9PiB7XG4gICgoKSA9PiB7XG4gICAgbW9uaVNlcnZlcigpO1xuICB9KSgpO1xufTtcblxuY29uc3QgY2hlY2twb3J0ID0gKGhvc3Q6IHN0cmluZywgcG9ydDogbnVtYmVyKTogUHJvbWlzZTx0cnVlIHwgc3RyaW5nPiA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBuZXQuU29ja2V0KCk7XG5cbiAgICAvLyBUcnkgdG8gY29ubmVjdCB0byBwb3J0XG4gICAgY2xpZW50LnNldFRpbWVvdXQoMjAwKTsgLy8gU2V0IHRpbWVvdXQgb2YgMC4yIHNlY29uZHNcbiAgICBjbGllbnQuY29ubmVjdChwb3J0LCBob3N0LCAoKSA9PiB7XG4gICAgICBjbGllbnQuZGVzdHJveSgpO1xuICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICB9KTtcblxuICAgIGNsaWVudC5vbihcImVycm9yXCIsIChlcnIpID0+IHtcbiAgICAgIGNsaWVudC5kZXN0cm95KCk7XG4gICAgICByZXNvbHZlKGBlcnJvcjogJHtKU09OLnN0cmluZ2lmeShlcnIpfWApO1xuICAgIH0pO1xuXG4gICAgY2xpZW50Lm9uKFwidGltZW91dFwiLCAoKSA9PiB7XG4gICAgICBjbGllbnQuZGVzdHJveSgpO1xuICAgICAgcmVzb2x2ZShcInRpbWVvdXRcIik7XG4gICAgfSk7XG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJuZXQiLCJtb25pdG9yTG9nc0NvbGwiLCJzZXJ2ZXIiLCJtb25pU2VydmVyIiwic2VydmVyS2V5cyIsIk9iamVjdCIsImtleXMiLCJzZXJ2ZXJzIiwibWFwIiwia2V5IiwiUHJvbWlzZSIsImFsbCIsInMiLCJyZXN1bHQiLCJjaGVja3BvcnQiLCJpcCIsImxvZ1R5cGUiLCJpbnNlcnRPbmUiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibWV0YWRhdGEiLCJ0eXBlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImluaXRNb25pdG9yIiwiaG9zdCIsInBvcnQiLCJyZXNvbHZlIiwiY2xpZW50IiwiU29ja2V0Iiwic2V0VGltZW91dCIsImNvbm5lY3QiLCJkZXN0cm95Iiwib24iLCJlcnIiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFNBQVMsTUFBTTtBQUN0QixPQUFPQyxxQkFBcUIseUJBQXlCO0FBTXJELE1BQU1DLFNBQTJDLENBQUM7QUFFbEQsTUFBTUMsYUFBYTtJQUNqQixNQUFNQyxhQUFhQyxPQUFPQyxJQUFJLENBQUNKO0lBQy9CLE1BQU1LLFVBQVVILFdBQVdJLEdBQUcsQ0FBQyxDQUFDQyxNQUFRUCxNQUFNLENBQUNPLElBQUk7SUFFbkQsTUFBTUMsUUFBUUMsR0FBRyxDQUNmSixRQUFRQyxHQUFHLENBQUMsT0FBT0k7UUFDakIsTUFBTUMsU0FBUyxNQUFNQyxVQUFVRixFQUFFRyxFQUFFLEVBQUU7UUFFckMsSUFBSUMsVUFBMkI7UUFDL0IsSUFBSUgsV0FBVyxNQUFNO1lBQ25CRyxVQUFVO1FBQ1o7UUFFQSxNQUFNZixnQkFBZ0JnQixTQUFTLENBQUM7WUFBRUMsV0FBVyxJQUFJQztZQUFRQyxVQUFVO2dCQUFFQyxNQUFNO2dCQUFVTDtZQUFRO1lBQUdNLEtBQUtDLEtBQUtDLFNBQVMsQ0FBQ1g7UUFBUTtJQUM5SDtBQUVKO0FBRUEsT0FBTyxNQUFNWSxjQUFjO0lBQ3hCLENBQUE7UUFDQ3RCO0lBQ0YsQ0FBQTtBQUNGLEVBQUU7QUFFRixNQUFNVyxZQUFZLENBQUNZLE1BQWNDO0lBQy9CLE9BQU8sSUFBSWpCLFFBQVEsQ0FBQ2tCO1FBQ2xCLE1BQU1DLFNBQVMsSUFBSTdCLElBQUk4QixNQUFNO1FBRTdCLHlCQUF5QjtRQUN6QkQsT0FBT0UsVUFBVSxDQUFDLE1BQU0sNkJBQTZCO1FBQ3JERixPQUFPRyxPQUFPLENBQUNMLE1BQU1ELE1BQU07WUFDekJHLE9BQU9JLE9BQU87WUFDZEwsUUFBUTtRQUNWO1FBRUFDLE9BQU9LLEVBQUUsQ0FBQyxTQUFTLENBQUNDO1lBQ2xCTixPQUFPSSxPQUFPO1lBQ2RMLFFBQVEsQ0FBQyxPQUFPLEVBQUVMLEtBQUtDLFNBQVMsQ0FBQ1csS0FBSyxDQUFDO1FBQ3pDO1FBRUFOLE9BQU9LLEVBQUUsQ0FBQyxXQUFXO1lBQ25CTCxPQUFPSSxPQUFPO1lBQ2RMLFFBQVE7UUFDVjtJQUNGO0FBQ0YifQ==
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/services/cron.ts":
/*!******************************!*\
  !*** ./src/services/cron.ts ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCron: () => (/* binding */ createCron)
/* harmony export */ });
/* harmony import */ var cron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cron */ "cron");

const createCron = (rule, fn)=>{
    return new cron__WEBPACK_IMPORTED_MODULE_0__.CronJob(rule, fn, null, true, "Asia/Ho_Chi_Minh");
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmVuZXRlci9XRC93b3JrcGxhY2UtLWRhdGFoaXYzL2xuMS9zZXJ2aWNlcy9zcmMvc2VydmljZXMvY3Jvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDcm9uSm9iIH0gZnJvbSBcImNyb25cIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNyb24gPSAocnVsZTogc3RyaW5nLCBmbjogKCkgPT4gdm9pZCkgPT4ge1xuICByZXR1cm4gbmV3IENyb25Kb2IocnVsZSwgZm4sIG51bGwsIHRydWUsIFwiQXNpYS9Ib19DaGlfTWluaFwiKTtcbn07XG4iXSwibmFtZXMiOlsiQ3JvbkpvYiIsImNyZWF0ZUNyb24iLCJydWxlIiwiZm4iXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLE9BQU8sUUFBUSxPQUFPO0FBRS9CLE9BQU8sTUFBTUMsYUFBYSxDQUFDQyxNQUFjQztJQUN2QyxPQUFPLElBQUlILFFBQVFFLE1BQU1DLElBQUksTUFBTSxNQUFNO0FBQzNDLEVBQUUifQ==

/***/ }),

/***/ "./src/services/dateRange.ts":
/*!***********************************!*\
  !*** ./src/services/dateRange.ts ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateRange: () => (/* binding */ DateRange)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "dayjs");

// 2018-04-04T16:00:00.000+07:00
class DateRange {
    from = dayjs__WEBPACK_IMPORTED_MODULE_0__(0);
    to = dayjs__WEBPACK_IMPORTED_MODULE_0__().add(1, "second");
    setFrom(from) {
        this.from = dayjs__WEBPACK_IMPORTED_MODULE_0__(from);
        return this;
    }
    setTo(to) {
        this.to = dayjs__WEBPACK_IMPORTED_MODULE_0__(to);
        return this;
    }
    current() {
        return {
            from: this.from,
            to: this.to
        };
    }
    getFromMs() {
        return this.from.valueOf();
    }
    getToMs() {
        return this.to.valueOf();
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmVuZXRlci9XRC93b3JrcGxhY2UtLWRhdGFoaXYzL2xuMS9zZXJ2aWNlcy9zcmMvc2VydmljZXMvZGF0ZVJhbmdlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcblxuLy8gMjAxOC0wNC0wNFQxNjowMDowMC4wMDArMDc6MDBcbmV4cG9ydCBjbGFzcyBEYXRlUmFuZ2Uge1xuICBwcml2YXRlIGZyb206IGRheWpzLkRheWpzID0gZGF5anMoMCk7XG4gIHByaXZhdGUgdG86IGRheWpzLkRheWpzID0gZGF5anMoKS5hZGQoMSwgXCJzZWNvbmRcIik7XG5cbiAgc2V0RnJvbShmcm9tOiBzdHJpbmcpIHtcbiAgICB0aGlzLmZyb20gPSBkYXlqcyhmcm9tKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0VG8odG86IHN0cmluZykge1xuICAgIHRoaXMudG8gPSBkYXlqcyh0byk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGN1cnJlbnQoKSB7XG4gICAgcmV0dXJuIHsgZnJvbTogdGhpcy5mcm9tLCB0bzogdGhpcy50byB9O1xuICB9XG5cbiAgZ2V0RnJvbU1zKCkge1xuICAgIHJldHVybiB0aGlzLmZyb20udmFsdWVPZigpO1xuICB9XG5cbiAgZ2V0VG9NcygpIHtcbiAgICByZXR1cm4gdGhpcy50by52YWx1ZU9mKCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJkYXlqcyIsIkRhdGVSYW5nZSIsImZyb20iLCJ0byIsImFkZCIsInNldEZyb20iLCJzZXRUbyIsImN1cnJlbnQiLCJnZXRGcm9tTXMiLCJ2YWx1ZU9mIiwiZ2V0VG9NcyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBVyxRQUFRO0FBRTFCLGdDQUFnQztBQUNoQyxPQUFPLE1BQU1DO0lBQ0hDLE9BQW9CRixNQUFNLEdBQUc7SUFDN0JHLEtBQWtCSCxRQUFRSSxHQUFHLENBQUMsR0FBRyxVQUFVO0lBRW5EQyxRQUFRSCxJQUFZLEVBQUU7UUFDcEIsSUFBSSxDQUFDQSxJQUFJLEdBQUdGLE1BQU1FO1FBRWxCLE9BQU8sSUFBSTtJQUNiO0lBRUFJLE1BQU1ILEVBQVUsRUFBRTtRQUNoQixJQUFJLENBQUNBLEVBQUUsR0FBR0gsTUFBTUc7UUFFaEIsT0FBTyxJQUFJO0lBQ2I7SUFFQUksVUFBVTtRQUNSLE9BQU87WUFBRUwsTUFBTSxJQUFJLENBQUNBLElBQUk7WUFBRUMsSUFBSSxJQUFJLENBQUNBLEVBQUU7UUFBQztJQUN4QztJQUVBSyxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUNOLElBQUksQ0FBQ08sT0FBTztJQUMxQjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNQLEVBQUUsQ0FBQ00sT0FBTztJQUN4QjtBQUNGIn0=

/***/ }),

/***/ "./src/services/response.ts":
/*!**********************************!*\
  !*** ./src/services/response.ts ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   errorResponse: () => (/* binding */ errorResponse),
/* harmony export */   newMessage: () => (/* binding */ newMessage),
/* harmony export */   successResponse: () => (/* binding */ successResponse)
/* harmony export */ });
const response = {
    status: false,
    version: process.env.VERSION || "0.1.0",
    message: {
        code: 404,
        text: "HTTP_404"
    }
};
const newMessage = (code, text)=>{
    return {
        code: code || 404,
        text
    };
};
const newResponse = ({ status, message, data, error })=>{
    const res = {
        status,
        version: response.version,
        message: message || response.message
    };
    if (data) {
        res.data = data;
    }
    if (error) {
        res.error = error;
    }
    return res;
};
const successResponse = (data)=>{
    return {
        status: true,
        version: "0.1.0",
        message: {
            code: 200,
            text: "success"
        },
        data
    };
};
const errorResponse = (error, code)=>{
    return {
        status: false,
        version: "0.1.0",
        message: {
            code: code || 500,
            text: "error"
        },
        error
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newResponse);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmVuZXRlci9XRC93b3JrcGxhY2UtLWRhdGFoaXYzL2xuMS9zZXJ2aWNlcy9zcmMvc2VydmljZXMvcmVzcG9uc2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgTWVzc2FnZSA9IHtcbiAgY29kZTogbnVtYmVyO1xuICB0ZXh0OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBSZXNwb25zZTxEYXRhID0gbnVsbCwgRXJyb3JEYXRhID0gbnVsbD4gPSB7XG4gIHN0YXR1czogYm9vbGVhbjtcbiAgdmVyc2lvbjogc3RyaW5nO1xuICBkYXRhPzogRGF0YTtcbiAgZXJyb3I/OiBFcnJvckRhdGE7XG4gIG1lc3NhZ2U6IE1lc3NhZ2U7XG59O1xuXG5leHBvcnQgdHlwZSBTdWNjZXNzUmVzcG9uc2U8VD4gPSB7XG4gIHN0YXR1czogdHJ1ZTtcbiAgdmVyc2lvbjogXCIwLjEuMFwiO1xuICBtZXNzYWdlOiB7IGNvZGU6IG51bWJlcjsgdGV4dDogc3RyaW5nIH07XG4gIGRhdGE6IFQ7XG59O1xuXG5leHBvcnQgdHlwZSBFcnJvclJlc3BvbnNlID0ge1xuICBzdGF0dXM6IGZhbHNlO1xuICB2ZXJzaW9uOiBcIjAuMS4wXCI7XG4gIG1lc3NhZ2U6IHsgY29kZTogbnVtYmVyOyB0ZXh0OiBzdHJpbmcgfTtcbiAgZXJyb3I6IHN0cmluZztcbn07XG5cbmNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZSA9IHtcbiAgc3RhdHVzOiBmYWxzZSxcbiAgdmVyc2lvbjogcHJvY2Vzcy5lbnYuVkVSU0lPTiB8fCBcIjAuMS4wXCIsXG4gIG1lc3NhZ2U6IHsgY29kZTogNDA0LCB0ZXh0OiBcIkhUVFBfNDA0XCIgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBuZXdNZXNzYWdlID0gKGNvZGU6IG51bWJlciwgdGV4dDogc3RyaW5nKTogTWVzc2FnZSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29kZTogY29kZSB8fCA0MDQsXG4gICAgdGV4dCxcbiAgfTtcbn07XG5cbmNvbnN0IG5ld1Jlc3BvbnNlID0gPFQsIEU+KHsgc3RhdHVzLCBtZXNzYWdlLCBkYXRhLCBlcnJvciB9OiB7IHN0YXR1czogYm9vbGVhbjsgbWVzc2FnZT86IE1lc3NhZ2U7IGRhdGE/OiBUOyBlcnJvcj86IEUgfSk6IFJlc3BvbnNlPFQsIEU+ID0+IHtcbiAgY29uc3QgcmVzOiBSZXNwb25zZTxULCBFPiA9IHtcbiAgICBzdGF0dXMsXG4gICAgdmVyc2lvbjogcmVzcG9uc2UudmVyc2lvbixcbiAgICBtZXNzYWdlOiBtZXNzYWdlIHx8IHJlc3BvbnNlLm1lc3NhZ2UsXG4gIH07XG4gIGlmIChkYXRhKSB7XG4gICAgcmVzLmRhdGEgPSBkYXRhO1xuICB9XG4gIGlmIChlcnJvcikge1xuICAgIHJlcy5lcnJvciA9IGVycm9yO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5leHBvcnQgY29uc3Qgc3VjY2Vzc1Jlc3BvbnNlID0gPFQ+KGRhdGE6IFQpOiBTdWNjZXNzUmVzcG9uc2U8VD4gPT4ge1xuICByZXR1cm4ge1xuICAgIHN0YXR1czogdHJ1ZSxcbiAgICB2ZXJzaW9uOiBcIjAuMS4wXCIsXG4gICAgbWVzc2FnZTogeyBjb2RlOiAyMDAsIHRleHQ6IFwic3VjY2Vzc1wiIH0sXG4gICAgZGF0YSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBlcnJvclJlc3BvbnNlID0gKGVycm9yOiBzdHJpbmcsIGNvZGU/OiBudW1iZXIpOiBFcnJvclJlc3BvbnNlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzdGF0dXM6IGZhbHNlLFxuICAgIHZlcnNpb246IFwiMC4xLjBcIixcbiAgICBtZXNzYWdlOiB7IGNvZGU6IGNvZGUgfHwgNTAwLCB0ZXh0OiBcImVycm9yXCIgfSxcbiAgICBlcnJvcixcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5ld1Jlc3BvbnNlO1xuIl0sIm5hbWVzIjpbInJlc3BvbnNlIiwic3RhdHVzIiwidmVyc2lvbiIsInByb2Nlc3MiLCJlbnYiLCJWRVJTSU9OIiwibWVzc2FnZSIsImNvZGUiLCJ0ZXh0IiwibmV3TWVzc2FnZSIsIm5ld1Jlc3BvbnNlIiwiZGF0YSIsImVycm9yIiwicmVzIiwic3VjY2Vzc1Jlc3BvbnNlIiwiZXJyb3JSZXNwb25zZSJdLCJtYXBwaW5ncyI6IkFBMkJBLE1BQU1BLFdBQXFCO0lBQ3pCQyxRQUFRO0lBQ1JDLFNBQVNDLFFBQVFDLEdBQUcsQ0FBQ0MsT0FBTyxJQUFJO0lBQ2hDQyxTQUFTO1FBQUVDLE1BQU07UUFBS0MsTUFBTTtJQUFXO0FBQ3pDO0FBRUEsT0FBTyxNQUFNQyxhQUFhLENBQUNGLE1BQWNDO0lBQ3ZDLE9BQU87UUFDTEQsTUFBTUEsUUFBUTtRQUNkQztJQUNGO0FBQ0YsRUFBRTtBQUVGLE1BQU1FLGNBQWMsQ0FBTyxFQUFFVCxNQUFNLEVBQUVLLE9BQU8sRUFBRUssSUFBSSxFQUFFQyxLQUFLLEVBQStEO0lBQ3RILE1BQU1DLE1BQXNCO1FBQzFCWjtRQUNBQyxTQUFTRixTQUFTRSxPQUFPO1FBQ3pCSSxTQUFTQSxXQUFXTixTQUFTTSxPQUFPO0lBQ3RDO0lBQ0EsSUFBSUssTUFBTTtRQUNSRSxJQUFJRixJQUFJLEdBQUdBO0lBQ2I7SUFDQSxJQUFJQyxPQUFPO1FBQ1RDLElBQUlELEtBQUssR0FBR0E7SUFDZDtJQUNBLE9BQU9DO0FBQ1Q7QUFFQSxPQUFPLE1BQU1DLGtCQUFrQixDQUFJSDtJQUNqQyxPQUFPO1FBQ0xWLFFBQVE7UUFDUkMsU0FBUztRQUNUSSxTQUFTO1lBQUVDLE1BQU07WUFBS0MsTUFBTTtRQUFVO1FBQ3RDRztJQUNGO0FBQ0YsRUFBRTtBQUVGLE9BQU8sTUFBTUksZ0JBQWdCLENBQUNILE9BQWVMO0lBQzNDLE9BQU87UUFDTE4sUUFBUTtRQUNSQyxTQUFTO1FBQ1RJLFNBQVM7WUFBRUMsTUFBTUEsUUFBUTtZQUFLQyxNQUFNO1FBQVE7UUFDNUNJO0lBQ0Y7QUFDRixFQUFFO0FBRUYsZUFBZUYsWUFBWSJ9

/***/ }),

/***/ "./src/utils/cache.ts":
/*!****************************!*\
  !*** ./src/utils/cache.ts ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheOptions: () => (/* binding */ cacheOptions)
/* harmony export */ });
const cacheOptions = {
    max: 500,
    maxSize: 50_000,
    sizeCalculation: ()=>{
        return 1;
    },
    ttl: 1000 * 60 * 1,
    allowStale: false,
    updateAgeOnGet: false,
    updateAgeOnHas: false
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmVuZXRlci9XRC93b3JrcGxhY2UtLWRhdGFoaXYzL2xuMS9zZXJ2aWNlcy9zcmMvdXRpbHMvY2FjaGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNhY2hlT3B0aW9ucyA9IHtcbiAgbWF4OiA1MDAsXG5cbiAgbWF4U2l6ZTogNTBfMDAwLFxuICBzaXplQ2FsY3VsYXRpb246ICgpID0+IHtcbiAgICByZXR1cm4gMTtcbiAgfSxcblxuICB0dGw6IDEwMDAgKiA2MCAqIDEsIC8vIDEgbWludXRlc1xuXG4gIGFsbG93U3RhbGU6IGZhbHNlLFxuXG4gIHVwZGF0ZUFnZU9uR2V0OiBmYWxzZSxcbiAgdXBkYXRlQWdlT25IYXM6IGZhbHNlLFxufTtcbiJdLCJuYW1lcyI6WyJjYWNoZU9wdGlvbnMiLCJtYXgiLCJtYXhTaXplIiwic2l6ZUNhbGN1bGF0aW9uIiwidHRsIiwiYWxsb3dTdGFsZSIsInVwZGF0ZUFnZU9uR2V0IiwidXBkYXRlQWdlT25IYXMiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTUEsZUFBZTtJQUMxQkMsS0FBSztJQUVMQyxTQUFTO0lBQ1RDLGlCQUFpQjtRQUNmLE9BQU87SUFDVDtJQUVBQyxLQUFLLE9BQU8sS0FBSztJQUVqQkMsWUFBWTtJQUVaQyxnQkFBZ0I7SUFDaEJDLGdCQUFnQjtBQUNsQixFQUFFIn0=

/***/ }),

/***/ "./src/utils/log.ts":
/*!**************************!*\
  !*** ./src/utils/log.ts ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pino */ "pino");

const logger = pino__WEBPACK_IMPORTED_MODULE_0__();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logger);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmVuZXRlci9XRC93b3JrcGxhY2UtLWRhdGFoaXYzL2xuMS9zZXJ2aWNlcy9zcmMvdXRpbHMvbG9nLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwaW5vIGZyb20gXCJwaW5vXCI7XG5cbmNvbnN0IGxvZ2dlciA9IHBpbm8oKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9nZ2VyO1xuIl0sIm5hbWVzIjpbInBpbm8iLCJsb2dnZXIiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFVBQVUsT0FBTztBQUV4QixNQUFNQyxTQUFTRDtBQUVmLGVBQWVDLE9BQU8ifQ==

/***/ }),

/***/ "./src/utils/production.ts":
/*!*********************************!*\
  !*** ./src/utils/production.ts ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   production: () => (/* binding */ production)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config/index.ts");

const production = (var1, var2)=>{
    if (_config__WEBPACK_IMPORTED_MODULE_0__.isProduction) {
        return var1;
    }
    return var2;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWVycmVuZXRlci9XRC93b3JrcGxhY2UtLWRhdGFoaXYzL2xuMS9zZXJ2aWNlcy9zcmMvdXRpbHMvcHJvZHVjdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1Byb2R1Y3Rpb24gfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0aW9uID0gKHZhcjE6IGFueSwgdmFyMjogYW55KSA9PiB7XG4gIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICByZXR1cm4gdmFyMTtcbiAgfVxuICByZXR1cm4gdmFyMjtcbn07XG4iXSwibmFtZXMiOlsiaXNQcm9kdWN0aW9uIiwicHJvZHVjdGlvbiIsInZhcjEiLCJ2YXIyIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxZQUFZLFFBQVEsWUFBWTtBQUV6QyxPQUFPLE1BQU1DLGFBQWEsQ0FBQ0MsTUFBV0M7SUFDcEMsSUFBSUgsY0FBYztRQUNoQixPQUFPRTtJQUNUO0lBQ0EsT0FBT0M7QUFDVCxFQUFFIn0=

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map