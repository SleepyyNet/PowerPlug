//const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let users = bot.users;

    let searchTerm = args[0];
    if(!searchTerm) return message.channel.send("Please provide someone to search.");

    let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    message.channel.send(matches.map(u => u.tag).join(", "));
}

module.exports.help = {
    name: "schusrs"
}