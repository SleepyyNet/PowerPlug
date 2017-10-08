const { RichEmbed } = require('discord.js');
exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author;
    const embed = new RichEmbed()
        .setAuthor(user.username + "#" + user.discriminator)
        .setThumbnail(user.displayAvatarURL)
        .addField("Is a bot", user.bot)
        .addField("ID", user.id)
        .addField("Tag", user.tag)
        .addField("Date of creation", user.createdAt);
    message.channel.send({embed});    
}

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 2,
  botPerms: [],
  requiredFuncs: [],
}

exports.help = {
  name: "userinfo",
  description: "Gets a user's info",
  usage: "",
  usageDelim: " ",
  extendedHelp: "",
}