module.exports.command = {
    name: "last10",
    aliases: ["last", "ultimas"],
    description: "Envia as últimas 10 punições.",
    category: "Top",
    usage: "last10"
}

exports.run = async (bot, message, args) => {
    const discord = require('discord.js')
    const axios = require('axios')
    let api = 'https://api.redesky.com/punishments/lasts?'

    axios.get(api).then( function (response){

        let array = response.data
        let ar = []
        let staffs = []
        let magic = [],
        i = 1
        let Hoje = array.filter(a => a.title === 'Hoje')
        let hoje = Hoje[0]
        if(!hoje) return message.reply('não encontrei nenhuma punição hoje.')
        else {
            let Array = hoje.data.data
            let array1 = Array.map(a => a.pretty.staffer)

            const count = array1.reduce( (tally, fruit) => {
                tally[fruit] = (tally[fruit] || 0) + 1 ;
                return tally;
            } , {})
              

            let croquete = array1.filter((este, i) => array1.indexOf(este) === i);

            croquete.map(a=> {
               magic.push('__'+count[a]+ '__' + ' **'+a+'**')
            })

            let magica = magic.sort(),
            magia = magica.reverse()

            let embed = new discord.RichEmbed()
            .setTitle('Últimas 10 punições')
            .setColor('RANDOM')
            .setDescription(magia.join('\n'))

            message.channel.send(embed)

        }

    }).catch(e=> message.channel.send('Ocorreu um erro:\n'+e))
}