import { createCommand } from "../utils/helpers.ts";
import { Embed } from "./../utils/Embed.ts";

createCommand({
  name: `help`,
  description: "commands/help:DESCRIPTION",
  botChannelPermissions: ["SEND_MESSAGES"],
  execute: function (message) {
    const embed = new Embed()
      .setColor("random")
      .setDescription(
        `\`\`\` help: \n *avatar: send you the avatar of the user \n *deno <code>: execute your code \n *invite:send you the invite of the bot \n *ping: send you a message to test the bot \n *stats: stats of the bot \`\`\``
      )
      .setImage(
        "https://media.discordapp.net/attachments/809999884820021252/841136200911683604/monda.gif"
      )
      .setTimestamp();

    return message.send({ embed });
  },
});
