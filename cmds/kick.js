const Discord = require('discord.js');
exports.run = async (bot, message, args) => {
    const client = new Discord.Client();
    if(!message.member.roles.some(r=>["Administrator", "Moderator", "Admin", "Mod"].includes(r.name)) ) return;

        if (message.mentions.users.size === 0) {
            return message.author.send("Correct Ussage: `kick (user) (reason)`")
        }

        let array = message.content.split(" ").slice(1);
        let mentioned = array[0];
        let reason = array.slice(1).join(" ")
        let member = message.mentions.members.first();
        const channel = message.guild.channels.find("name", "mod-log")
        

        if (!reason) {
            return message.author.send("Correct Ussage: `kick (user) (reason)`")
        }
        const embed = new Discord.RichEmbed()
        .setDescription("**User Kicked**\n**User**: " + member + "\n**Kicked By: **" + message.author + "\n**Reason**: " + reason)
        message.channel.send({ embed })
        message.guild.channels.find("name", "mod-log").send({ embed })
        member.send({ embed })

        setTimeout(function() {
            member.kick();
            message.delete()
        });
}
