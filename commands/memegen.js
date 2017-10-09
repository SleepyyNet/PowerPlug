const { RichEmbed } = require('discord.js');
exports.run = async (client, msg, args) => {
    const user = msg.mentions.users.first() || msg.author;
    console.log(args);
    args = args.join(' ').replace(/<@!?[0-9]+>/g, '').split(' | ');
    console.log(args);
    const top = args[0].trim();
    const bottom = args[1].trim();
    
    const embed = new RichEmbed()
        .setImage(`https://memegen.link/custom/${top}/${bottom}.jpg?alt=${user.displayAvatarURL}`);

    msg.channel.send({embed}); 
}

exports.help = {
   name: "memegen",
   description: "Generates a meme from an avatar",
   usage: "[top:str] [bottom:str]",
   usageDelim: ""
}

exports.conf = {
   enabled: true,
   runIn: ["text"],
   aliases: [],
   permLevel: 0,
   botPerms: [],
   requiredFuncs: [],
   requiredSettings: [],
}