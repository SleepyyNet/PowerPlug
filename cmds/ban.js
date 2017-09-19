const Discord = require('discord.js');
exports.run = async (bot, message, args) => {
  if(message.guild.member.hasPermission(["BAN_MEMBERS"])) return message.reply("You do not have the permission to Ban Members");
  
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('You must supply a reason for the ban.');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to ban them.').catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply('I cannot ban that member');
  message.guild.ban(user, 2);

  let modlog = client.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Ban\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
  return client.channels.get(modlog.id).send({embed});
}

