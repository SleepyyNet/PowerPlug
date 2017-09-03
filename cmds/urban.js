const ud = require('urban-dictionary');
const Discord = require('discord.js')
const snekfetch = require('snekfetch');
exports.run = async (bot, message, args) => {
            ud.random(function (error, entry) {
            if (error) {
                message.channel.send("There was an error.")
            } else {
                var embed = new Discord.RichEmbed()
                    .setTitle(entry.word)
                    .addField("Definition", entry.definition)
                    .addField("Example", entry.example)

            message.channel.send({embed})      
            }
        })
}
