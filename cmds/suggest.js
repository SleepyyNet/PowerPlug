const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
        let suggestion = args.join(" ");
        const channel = message.guild.channels.find("name", "suggestions")

        if(!suggestion){
            return message.channel.send("No suggestion provided")
        }
        const embed = new Discord.RichEmbed()
        .setDescription("**User Suggestion**\n**User**: " + message.author.username + "\n**Suggestion**: " + suggestion)
        message.channel.send({ embed })
        message.guild.channels.find("name", "suggestions").send({ embed })
}

module.exports.help = {
    name: "suggest"
}