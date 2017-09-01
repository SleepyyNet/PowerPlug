const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
message.channel.send("Check your private messages, " + message.author.username)    
    let embed = new Discord.RichEmbed()
        .addField("`pp2!userinfo`", "Your user info")
        .addField("`pp2!avatar`", "Generates your avatar")
        .addField("`pp2!help`", "Shows this message")
        .addField("`pp2!serverinfo`", "Shows server info")
        .addField("`pp2!ping`", "Shows the websocket ping for Discord")
        .addField("`pp2!say`", "Repeats what you say")
        .addField("`pp2!engt`", "A feed of news from https://engadget.com/")
        .addField("`pp2!ign`", "A feed from https://ign.com")
        .addField("`pp2!suggest`", "Suggests commands for PowerPlugJS")
        .addField("These are the commands so far, join my server (https://discord.gg/DWff7sP) to keep updated.", "Invite: https://bit.ly/PowerPlug");


message.author.send({embed: embed});


}

module.exports.help = {
    name: "help"
}