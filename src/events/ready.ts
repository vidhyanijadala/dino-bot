import {
  ActivityType,
  botCache,
  cache,
  editBotsStatus,
  StatusTypes,
} from "../../deps.ts";
import { registerTasks } from "./../utils/taskHelper.ts";

botCache.eventHandlers.ready = function () {
  editBotsStatus(
    StatusTypes.DoNotDisturb,
    "hacking on deno",
    ActivityType.Game,
  );

  registerTasks();

  console.log(
    `BOT ON ${cache.guilds.size} guild(s)!`,
  );
};
