import { token } from "./token.ts";

export const configs = {
    token: token,
    prefix: "*",
    botListTokens: {
      DISCORD_BOTS_CO: "",
      DISCORD_BOT_ORG: "",
      BOTS_ON_DISCORD: "",
      DISCORD_BOT_LIST: "",
      BOTS_FOR_DISCORD: "",
      DISCORD_BOATS: "",
      DISCORD_BOTS_GG: "",
      DISCORD_BOTS_GROUP: "",
    },
    supportServerID: "",
    channelIDs: {
      missingTranslation: "",
      errorChannelID: "",
    },
    roleIDs: {
      patreonVIPRoleID: "",
    },
    userIDs: {
      botSupporters: [] as string[],
      botDevs: [] as string[],
      botOwners: [] as string[],
    },
  };
  