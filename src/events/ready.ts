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
    `*help | in ${cache.guilds.size.toLocaleString()} servers!`,
    ActivityType.Game
  );

  registerTasks();

  console.log(`BOT ON ${cache.guilds.size} guild(s)!`);
};
