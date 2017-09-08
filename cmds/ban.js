const Discord = require('discord.js');
exports.run = async (bot, message, args) => {
        if(!message.member.roles.some(r=>["Administrator", "Moderator", "Admin", "Mod", "Admins", "Mods"].includes(r.name)) ) return;

        if (message.mentions.users.size === 0) {
            return message.author.send("Correct Ussage: `ban (user) (reason)`")
        }

        let array = message.content.split(" ").slice(1);
        let mentioned = array[0];
        let reason = array.slice(1).join(" ")
        let member = message.mentions.members.first();
        const channel = message.guild.channels.find("name", "mod-log")
        

        if (!reason) {
            const embed2 = new Discord.RichEmbed()
                   .setTimestamp()
                   .addField('Action:', 'Un/Mute')
                   .addField('User:', `${user.username}#${user.discriminator}`)
                   .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
                   .addField('Reason:', reason);
                message.channel.send({embed2})
                message.guild.channels.find("name", "mod-log").send({embed})
                member.send({embed})
                setTimeout(function() {
                member.kick();
                message.delete()
            });
        }
        const embed = new Discord.RichEmbed()
        .setTimestamp()
        .addField('Action:', 'Un/Mute')
        .addField('User:', `${user.username}#${user.discriminator}`)
        .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
        .addField('Reason:', reason);
        message.channel.send({ embed })
        message.guild.channels.find("name", "log").send({ embed })
        member.send({ embed })

        setTimeout(function() {
            member.ban();
        });
}

