import { type Context, Telegraf } from "telegraf";
import type { Update } from "telegraf/typings/core/types/typegram";
import { isProduction } from "../config";
import logger from "../utils/log";

class TelegramBot {
  public bot: Telegraf;
  public isProduction = false;
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

  public async sendMessage(chatId: number, text: string) {
    try {
      await this.bot.telegram.sendMessage(chatId, text);
    } catch (error) {
      logger.error(`TelegramBot sendMessage error: ${error}`);
    }
  }
}

export default TelegramBot;
