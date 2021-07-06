import { Embed } from "./../utils/Embed.ts";
import { cache } from "../../deps.ts";
import { createCommand } from "../utils/helpers.ts";
const DISCORDENO_VERSION = "10.5.0";

createCommand({
  name: "stats",
  guildOnly: true,
  execute: async (message) => {
    let totalMemberCount = 0;
    let cachedMemberCount = 0;

    for (const guild of cache.guilds.values()) {
      totalMemberCount += guild.memberCount;
      cachedMemberCount += guild.members.size;
    }

    const rawResponse = await fetch(
      "https://deno-online-compiler.herokuapp.com/status",
      { method: "GET" }
    );
    const content = await rawResponse.json();
    let out = content.out;
    const ms =  out.match(/\d+ms/)
    const embed = new Embed()
      .setAuthor(
        `${message.guild?.botMember?.nick || message.guild?.bot?.tag} Stats`,
        message.guild?.bot?.avatarURL
      )
      .setColor("random")
      .addField("Guilds:", cache.guilds.size.toLocaleString(), true)
      .addField("Total Members:", totalMemberCount.toLocaleString(), true)
      .addField("Cached Members:", cachedMemberCount.toLocaleString(), true)
      .addField("Channels:", cache.channels.size.toLocaleString(), true)
      .addField("Messages:", cache.messages.size.toLocaleString(), true)
      .addField("Deno Version:", `v${Deno.version.deno}`, true)
      .addField("Discordeno Version:", `v${DISCORDENO_VERSION}`, true)
      .addField("Api Deno Compiler Response Time:", `${ms}`, true)
      .setTimestamp();

    return message.send({ embed });
  },
});
