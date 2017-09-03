const Discord = require('discord.js');
exports.run = async (bot, message, args) => {
        let suggestion = args.join(" ");
        const channel = bot.channels.get('339926027151081472')

        if(!suggestion){
            return message.channel.send("No suggestion provided")
        }
        const embed = new Discord.RichEmbed()
        .setDescription("**User Suggestion**\n**User**: " + message.author.username + "\n**Suggestion**: " + suggestion)
        message.channel.send({ embed });
        channel.send({ embed });
}
