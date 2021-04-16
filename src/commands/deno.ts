import { botCache, cache } from "../../deps.ts";
import { createCommand } from "../utils/helpers.ts";
import { Embed } from "./../utils/Embed.ts";

createCommand({
  name: "deno",
  description: "commands/deno:EXECUTE",
  botChannelPermissions: ["SEND_MESSAGES"],
  arguments: [{ name: "input", type: "...string", required: true }],
  execute: async function (message, args) {
    const write = Deno.writeTextFile("./execute.ts", `${args.input}`); // here are going to write the archive to the execute.ts
    write.then(() => console.log("archive edited!"));

    const cmd = Deno.run({
      cmd: ["deno", "run", "-A", "execute.ts"],
      stdout: "piped",
      stderr: "piped", // here execute de archive
    });

    const rawOutput = await cmd.output();
    cmd.close();
    const output = new TextDecoder().decode(rawOutput); // here decode de output hex => text

    const embed = new Embed()
      .setColor("random")
      .addField(`${output}`, cache.messages.size.toLocaleString(), true)
      .setTimestamp();

    return message.send({ embed });
  },
});
