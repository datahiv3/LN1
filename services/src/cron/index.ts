import { initMonitor } from "../monitors";
import { createCron } from "../services/cron";
import logger from "../utils/log";

export const cronInit = () => {
  // https://crontab.cronhub.io/
  if (process.env.START_CRON !== "true") {
    logger.info({ thread: "cron", message: "do not start cron" });
    return;
  }

  // monitor
  const monitor = createCron(`0/15 * * * * *`, function () {
    logger.info({ thread: "cron", type: `Monitor every 15 seconds` });
    try {
      initMonitor();
    } catch (e) {
      logger.info({ thread: "cron", type: `Monitor every 15 seconds`, error: e });
    }
  });

  (() => {
    // monitor
    monitor.start();

    logger.info({ thread: "cron", message: "production cron started" });
  })();
};
