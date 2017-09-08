const Discord = require('discord.js');
const settings = require('../settings.json')
exports.run = async (bot, message, args) => {
    const embed = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/350173567675006977/350173647081570324/Unbenannt1.png")
        .setTitle('PowerPlugJS')
        .addField("Node.js Version", process.version)
        .addField("Guilds", bot.guilds.size)
        .addField("Prefix", settings.prefix)
        .addField("Owner", "CircuitRCAY#6187")
        .addField("Invite & GitHub", "Invite: https://bit.ly/PowerPlug, GitHub: https://github.com/codefromcirc/powerplugjs");

     message.channel.send({embed})   
        
}