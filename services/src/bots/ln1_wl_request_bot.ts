import TelegramBot from "../services/telegram";

export const ln1_wl_request_bot_config = {
  id: 7749154866,
  is_bot: true,
  first_name: "ln1_wl_request_bot",
  username: "ln1_wl_request_bot",
  can_join_groups: true,
  can_read_all_group_messages: false,
  supports_inline_queries: false,
  can_connect_to_business: false,
  has_main_web_app: false,
  token: "7749154866:AAFb_tM_d5zVfxLFaXp4zPvgjqAItHlJwO0",
};

export const ln1_wl_request_bot = new TelegramBot("ln1_wl_request_bot", ln1_wl_request_bot_config.token);
