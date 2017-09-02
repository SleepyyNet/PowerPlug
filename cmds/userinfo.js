const Discord = require('discord.js');
const fs = require('fs');
module.exports.run = async (bot, message, args) => {
        let target = message.mentions.users.first() || message.author;

       let embed = new Discord.RichEmbed()
            .setAuthor(target.username)
            .setThumbnail(target.avatarURL)
            .setDescription("This user's info!")
            .setColor("#ff0000")
            .addField("Full Username", `${target.username}#${target.discriminator}`)
            .addField("User ID", target.id)
            .addField("Account created at", target.createdAt);

            
       message.channel.send({embed});     

}

module.exports.help = {
    name: "userinfo" 
    
}