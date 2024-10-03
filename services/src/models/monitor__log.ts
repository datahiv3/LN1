import { DbModel } from "../db/collName";
import { MonitorLogModel } from "./model";

export const monitorDb = new DbModel("monitor");

const monitorLogsColl = await monitorDb.createCollection<MonitorLogModel>("logs", true);
export default monitorLogsColl;
