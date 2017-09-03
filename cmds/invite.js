const Discord = require('discord.js');
exports.run = async (bot, message, args)  => {
    let embed = new Discord.RichEmbed()
        .setDescription("https://bit.ly/PowerPlug");

    message.channel.send({embed});     
}

