const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
       let servembed = new Discord.RichEmbed()
       let guild = new Discord.Guild()
            .setDescription("This server's info!")
            .setColor("#ff0000")
            .addField("Guild name", guild.name)
            .addField("Guild ID", guild.id)
            .addField("Guild created at", guild.createdAt)
            .addField("Guild Owner", guild.owner)
            
       message.channel.send({servembed});     
}

module.exports.help = {
    name: "serverinfo"
    
}