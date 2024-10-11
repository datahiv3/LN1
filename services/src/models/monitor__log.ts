import { DbModel } from "../db/collName";
import type { MonitorLogModel } from "./monitor";

export const monitorDb = new DbModel("monitor");

const monitorLogsColl = await monitorDb.createCollection<MonitorLogModel>("logs", true);
export default monitorLogsColl;
