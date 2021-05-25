import { createCommand } from "../utils/helpers.ts";

createCommand({
  name: "ping",
  description: "commands/ping:DESCRIPTION",
  botChannelPermissions: ["SEND_MESSAGES"],
  execute: function (message) {
    message.send(`Ping MS: ${Date.now() - message.timestamp}ms`);
  },
});
