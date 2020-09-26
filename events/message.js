const discord = require("discord.js")
const bot = require("../index")
const config = require('../config.json')

bot.on("message", async (message) => {
    //
    if(message.author.bot || message.channel.type === "dm") return;

    //

    let prefix = config.prefix;
    if (!message.content.startsWith(prefix)) return;

    let args = message.content.slice(prefix.length).trim().split(/ +/)
    let cmd = args.shift().toLowerCase()

    let command;
    if (bot.commands.has(cmd)) {
        command = bot.commands.get(cmd)
    } else if (bot.aliases.has(cmd)) {
        command = bot.commands.get(bot.aliases.get(cmd))
    } else return

    try {
        command.run(bot, message, args)
    } catch (err) {
        console.log(err)
    }
})