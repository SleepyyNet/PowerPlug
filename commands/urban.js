const { RichEmbed } = require('discord.js');
exports.run = async (client, msg, args) => {
    const ud = require('urban-dictionary')
   
    var definition = args.join(' ')
 
    ud.term(definition, function (error, entries, tags, sounds) {
    if (error) {
        console.error(error.message)
    } else {
        const embed = new RichEmbed()
            .setTitle(entries[0].word)
            .addField("Definition", entries[0].definition)
            .addField("Example", entries[0].example);
        msg.channel.send({embed});    
    }
 })
}

exports.conf = {
   enabled: true,
   runIn: ["text", "dm", "group"],
   aliases: ["ub"],
   permLevel: 0,
   botPerms: [],
   requiredFuncs: [],
   requiredSettings: [],
}

exports.help = {
   name: "urban",
   description: "Searches Urban Dictionary for a provided term",
   usage: "<query:str>",
   usageDelim: "",
}