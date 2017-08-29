const Discord = require('discord.js');
module.exports.run = async (bot, message, args)  => {
    let embed = new Discord.RichEmbed()
        .setDescription("https://bit.ly/PowerPlug");

    message.channel.send({embed});     
}

module.exports.help = {
    name: "invite"
}