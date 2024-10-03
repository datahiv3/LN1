import { CronJob } from "cron";

export const createCron = (rule: string, fn: () => void) => {
  return new CronJob(rule, fn, null, true, "Asia/Ho_Chi_Minh");
};
