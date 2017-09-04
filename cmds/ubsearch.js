const ud = require('urban-dictionary');
const Discord = require('discord.js')
const snekfetch = require('snekfetch');
exports.run = async (bot, message, args) => {
    const definition = args.join(" ")
    
    ud.term(definition, function (error, entries, tags, sounds) {
    if (error) {
        message.channel.send("Urban Dictionary error. Report this to me (CircuitRCAY#6187)");
    } else {
        const embed = new Discord.RichEmbed()
        .setTitle(entries[0].word)
        .addField("Definition", entries[0].definition)
        .addField("Example", entries[0].example);

        message.channel.send({embed});
    }
})}

