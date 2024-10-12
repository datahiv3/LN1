import { DbModel } from "../db/collName";

export type LogModel = {
  time: Date;
  log: string;
  type: "error" | "log";
};

export type MonitorLogModel = {
  timestamp: Date;
  metadata: {
    type: "server" | "service";
    logType: "error" | "log";
  };
  log?: string;
  jsonLog?: object;
};

export const monitorDb = new DbModel("monitor");

const monitorLogsColl = await monitorDb.createCollection<MonitorLogModel>("logs", true);
export default monitorLogsColl;
