import { Context, Telegraf } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";
import { isProduction } from "../config";
import logger from "../utils/log";

class TelegramBot {
  public bot: Telegraf;
  public isProduction: boolean = false;
  public name: string;
  public defaultChat: number;

  public constructor(name: string, token: string, productionToken?: string, options?: Partial<Telegraf.Options<Context<Update>>>) {
    this.name = name;
    this.isProduction = isProduction;
    this.bot = new Telegraf(this.isProduction ? productionToken || token : token, options);

    logger.info(`TelegramBot init ${name}`);
  }

  public async launch() {
    logger.info(`TelegramBot launch ${this.name}`);

    return this.bot.launch();
  }

  public setDefaultChat(id: number) {
    this.defaultChat = id;
  }
}

export default TelegramBot;
