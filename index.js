const Discord = require("discord.js")
const bot = new Discord.Client()
const config = require("./config.json")
module.exports = bot
bot.queue = new Map();
const { loadCommands, loadEvents } = require("./util/handler")
loadCommands()
loadEvents()



bot.login(config.token)