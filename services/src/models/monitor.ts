import { DbModel } from "../db/collName";

export const monitorDb = new DbModel("monitor");

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
