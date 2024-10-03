import { program } from "commander";

program.option("-i, --account-index <accountIndex>", "account index", "0");
program.option("-n, --network-index <networkIndex>", "network index", "0");
program.parse();

export const accountIndex = Number(program.opts().accountIndex || 0);
export const networkIndex = Number(program.opts().networkIndex || 0);

export const cli = { accountIndex, networkIndex };
