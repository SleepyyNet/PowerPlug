const Discord = require('discord.js');
exports.run = async (bot, message, args) => {
    const client = new Discord.Client();
    const m = await message.channel.send("Pinging....");
    m.edit(`Pong! Latency/Ping is ${m.createdTimestamp - message.createdTimestamp}ms.`);
}
