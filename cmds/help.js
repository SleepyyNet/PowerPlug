const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
message.channel.send("Check your private messages, " + message.author.username)    
    let embed = new Discord.RichEmbed()
        .addField("`pp2!userinfo`", "Your user info")
        .addField("`pp2!avatar`", "Generates your avatar")
        .addField("`pp2!help`", "Shows this message")
        .addField("These are the commands so far, join my server (https://discord.gg/qz4jxzb) to keep updated.");

message.author.send({embed: embed});


}

module.exports.help = {
    name: "help"
}