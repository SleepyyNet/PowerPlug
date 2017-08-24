const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
       let servembed = new Discord.RichEmbed()
            .setDescription("This server's info!")
            .setColor("#ff0000")
            .addField("Guild name", message.guild.name)
            .addField("Guild ID", message.guild.id)
            .addField("Guild created at", message.guild.createdAt)
            .addField("Roles", message.guild.roles);
            
       message.channel.send({servembed});     
}

module.exports.help = {
    name: "serverinfo"
    
}