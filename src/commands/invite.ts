import { createCommand } from "../utils/helpers.ts";

createCommand({
  name: `invite`,
  execute: function (message) {
    message.reply("https://discord.com/api/oauth2/authorize?client_id=830530080349749248&permissions=59392&scope=bot");
  },
});
