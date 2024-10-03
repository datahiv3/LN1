import net from "net";
import monitorLogsColl from "../models/monitor__log";

type MonitorServer = {
  ip: string;
};

const server: { [key: string]: MonitorServer } = {};

const moniServer = async () => {
  const serverKeys = Object.keys(server);
  const servers = serverKeys.map((key) => server[key]);

  await Promise.all(
    servers.map(async (s) => {
      const result = await checkport(s.ip, 22);

      let logType: "error" | "log" = "error";
      if (result === true) {
        logType = "log";
      }

      await monitorLogsColl.insertOne({ timestamp: new Date(), metadata: { type: "server", logType }, log: JSON.stringify(result) });
    }),
  );
};

export const initMonitor = () => {
  (() => {
    moniServer();
  })();
};

const checkport = (host: string, port: number): Promise<true | string> => {
  return new Promise((resolve) => {
    const client = new net.Socket();

    // Try to connect to port
    client.setTimeout(200); // Set timeout of 0.2 seconds
    client.connect(port, host, () => {
      client.destroy();
      resolve(true);
    });

    client.on("error", (err) => {
      client.destroy();
      resolve(`error: ${JSON.stringify(err)}`);
    });

    client.on("timeout", () => {
      client.destroy();
      resolve("timeout");
    });
  });
};
