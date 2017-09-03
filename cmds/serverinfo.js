const Discord = require('discord.js');
exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .addField("Guild Name", message.guild.name)
        .addField("Guild ID", message.guild.id)
        .addField("Guild Owner", message.guild.owner)
        .addField("Member Count", message.guild.memberCount)
        .addField("Guild created at", message.guild.createdAt)
        .setThumbnail(message.guild.iconURL);

        message.channel.send({embed});
}
