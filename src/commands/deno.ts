import { botCache, cache } from "../../deps.ts";
import { createCommand } from "../utils/helpers.ts";
import { Embed } from "./../utils/Embed.ts";
import { sleep } from "https://deno.land/x/sleep/mod.ts";

createCommand({
  name: "deno",
  description: "commands/deno:EXECUTE",
  botChannelPermissions: ["SEND_MESSAGES"],
  arguments: [{ name: "input", type: "...string", required: true }],
  execute: async function (message, args) {
    const write = Deno.writeTextFile("./execute.ts", `${args.input}`); // here are going to write the archive to the execute.ts
    write.then(() => console.log("archive edited!"));

    const cmd = Deno.run({
      cmd: ["deno", "run", "--no-check", `execute.ts`],
      env: {
        NO_COLOR: "1",
      },
      stderr: "piped",
      stdout: "piped",
      stdin: "null",
    });
    await sleep(1);
    Deno.kill(cmd.pid, Deno.Signal.SIGINT); // kill the procces

    const rawOutput = await cmd.output();
    const rawError = await cmd.stderrOutput();
    cmd.close();
    const errorOutput: string = new TextDecoder().decode(rawError);
    const output: string = new TextDecoder().decode(rawOutput); // here decode de output hex => text
    const embed = new Embed()
      .setColor("random")
      .addField(`deno output:  ${errorOutput}`, `v${Deno.version.deno} `, true)
      .setDescription("```\n" + output + "```")
      .setTimestamp();

    return message.send({ embed });
  },
});
