import { createCommand, filterCodeBlock } from "../utils/helpers.ts";
import { Embed } from "./../utils/Embed.ts";
//🦕🍱
createCommand({
  name: "deno",
  description: "commands/deno:EXECUTE",
  botChannelPermissions: ["SEND_MESSAGES"],
  arguments: [{ name: "input", type: "...string", required: true }],
  execute: async function (message, args) {
    const rawResponse = await fetch(
      "https://api-deno-compiler.herokuapp.com/code",
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: `${filterCodeBlock(args.input)}` }),
      },
    );
    const content = await rawResponse.json();
    var output = content.out;
    console.log(output);

    const embed = new Embed()
      .setColor("random")
      .setDescription("```ts\n" + output + "```")
      .setTimestamp();

    return message.send({ embed });
  },
});
