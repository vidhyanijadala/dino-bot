import { botCache, cache } from "../../deps.ts";
import { createCommand } from "../utils/helpers.ts";
import { Embed } from "./../utils/Embed.ts";
//import { kill } from 'https://deno.land/x/process@v0.3.0/mod.ts'
//import { sleep } from "https://deno.land/x/sleep/mod.ts";
//import { exec } from "https://deno.land/x/exec/mod.ts";

createCommand({
  name: "deno",
  description: "commands/deno:EXECUTE",
  botChannelPermissions: ["SEND_MESSAGES"],
  arguments: [{ name: "input", type: "...string", required: true }],
  execute: async function (message, args) {
    const write = Deno.writeTextFile("./execute.ts", `${args.input}`); // here are going to write the archive to the execute.ts
    write.then(() => console.log("archive edited!"));

    const cmd = Deno.run({
      cmd: ["deno", "run", "execute.ts"],
      stdout: "piped",
      stderr: "piped", // here execute de archive
    });
    //    await sleep(1)

    const rawOutput = await cmd.output();
    cmd.close();
    const output:string = new TextDecoder().decode(rawOutput); // here decode de output hex => text

    const embed = new Embed()
      .setColor("random")
      .setDescription(`\`\`\` ${output}  \`\`\``)
      .addField("output", `v${Deno.version.deno}`, true)
      .setTimestamp();

    return message.send({ embed });
  },
});
