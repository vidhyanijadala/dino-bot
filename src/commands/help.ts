import { createCommand } from "../utils/helpers.ts";
import { Embed } from "./../utils/Embed.ts";

createCommand({
  name: "help",
  description: "commands/help:DESCRIPTION",
  botChannelPermissions: ["SEND_MESSAGES"],
  execute: function (message) {
    const embed = new Embed()
      .setColor("random")
      .setDescription(
        `\`\`\` help: \n *avatar: send you the avatar of the user \n *deno <code>: execute your code \n *invite:send you the invite of the bot \n *ping: send you a message to test the bot \n *stats: stats of the bot \`\`\``
      )
      .setImage(
        "https://cdn.discordapp.com/attachments/849501077840986112/850354701102612490/unknown.png"
      )
      .setTimestamp();

    return message.send({ embed });
  },
});
