import "https://deno.land/x/dotenv/load.ts";
import { botCache, Intents, startBot } from "./deps.ts";
import { configs } from "./configs.ts";
import { fileLoader, importDirectory } from "./src/utils/helpers.ts";

console.info(
  "Beginning Bot Startup Process. This can take a little bit depending on your system. Loading now...",
);

await Promise.all(
  [
    "./src/commands",
    "./src/events",
    "./src/arguments",
    "./src/monitors",
    "./src/events",
  ].map((path) => importDirectory(Deno.realPathSync(path))),
);
await fileLoader();

startBot({
  token: configs.token,
  intents: [Intents.GUILDS, Intents.GUILD_MESSAGES],
  eventHandlers: botCache.eventHandlers,
});
