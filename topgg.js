const Discord = require('discord.js');
const client = new Discord.Client();
const { AutoPoster } = require('topgg-autoposter')
require('dotenv').config()
const poster = AutoPoster(process.env.TOPGG, client)

poster.on('posted', (stats) => { // ran when succesfully posted
  console.log(`Posted stats to Top.gg | ${stats.serverCount} servers`)
})

client.login(process.env.TOKEN)
