const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
       let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("This user's info!")
            .setColor("#ff0000")
            .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
            .addField("User ID", message.author.id)
            .addField("Account created at", message.author.createdAt);
       message.channel.send({embed});     

}

module.exports.help = {
    name: "userinfo" 
    
}