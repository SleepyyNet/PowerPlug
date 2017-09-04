const Discord = require('discord.js');
const ud = require('urban-dictionary');
exports.run = async (bot, message, args) => {
    ud.random(function (error, entry) {
    if (error) {
        message.channel.send("Urban Dictionary error. Report to me (CircuitRCAY#6187) for support")
    } else {
        const embed = new Discord.RichEmbed()
            .setTitle(entry.word)
            .addField("Definition", entry.definition)
            .addField("Example", entry.example);

        message.channel.send({embed});
    }
    })
}
