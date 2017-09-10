const Discord = require('discord.js');
exports.run = async (bot, message, args) => {
message.channel.send("Check your private messages, " + message.author.username)    
    let embed = new Discord.RichEmbed()
        .addField("Commands are in", "https://gist.github.com/CodeFromCirc/2ff597c5802b5dbf04f383757e8d342d")
        .addField("Join my server (https://discord.gg/DWff7sP) to keep updated.", "Invite: https://bit.ly/PowerPlug");


message.author.send({embed: embed});


}
