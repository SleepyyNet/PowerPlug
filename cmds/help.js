const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
message.channel.send("Check your private messages, " + message.author.mention)    
    let embed = new Discord.RichEmbed()
        .addField("`pp2!userinfo`", "Your user info")
        .addField("`pp2!avatar`", "Generates your avatar")
        .addField("`pp2!help`", "Shows this message")
        .addField("`pp2!serverinfo`", "Shows server info" )
        .addField("These are the commands so far, join my server (https://discord.gg/qz4jxzb) to keep updated.", "Invite: https://bit.ly/PowerPlug");


message.author.send({embed: embed});


}

module.exports.help = {
    name: "help"
}