const fs = require('fs');
exports.run = async (bot, message, args) => {
if(message.channel.type != "text") return message.reply('You are not in a guild!');
if(!message.guild.member.hasPermssion(["ADMINISTRATOR"])) return message.reply('You have to have the "ADMINISTRATOR" role to use this command!');
let Prefix = args.split(" ").splice(0, 1);
fs.writeFile(`./prefixes/${message.guild.id}.json`, `{\n    \"Prefix\" : \"${Prefix}\"\n}`)
}
