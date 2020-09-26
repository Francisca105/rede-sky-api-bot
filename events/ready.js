const Discord = require("discord.js")
const bot = require("../index")

bot.on("ready", () => {
    console.log(`${bot.user.username} está online, em ${bot.guilds.size} servidores, com ${bot.users.size} usuários.`)
    bot.user.setActivity("fiquei online!", {type: "PLAYING", url:"https://discord.gg/KBHNPYh"});

    //status
    
       let statuses = [
           `Rede Sky`,
           `top punições!`,
           `a ajudar ${bot.users.size} membros!`
       ]
    
       setInterval(function() {
           let status = statuses[Math.floor(Math.random() * statuses.length)];
           bot.user.setActivity(status, {type: "PLAYING", url:"https://discord.gg/KBHNPYh"});
    
       }, 2* 5000)
})