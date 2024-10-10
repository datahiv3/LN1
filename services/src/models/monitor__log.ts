import { DbModel } from "../db/collName";
import type { MonitorLogModel } from "./model";

export const monitorDb = new DbModel("monitor");

const monitorLogsColl = await monitorDb.createCollection<MonitorLogModel>("logs", true);
export default monitorLogsColl;
