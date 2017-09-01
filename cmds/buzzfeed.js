const api = "https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey=849143e4fd0743efb31ca18ce5d31fcb";
const snekfetch = require("snekfetch");
const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
    snekfetch.get(api).then(r => {
        let body = r.body;
        let id = Number(args[0]);
        if(!id) return  message.channel.send("Supply an ID");
        if(isNaN(id)) return message.channel.send("Supply a valid number!")

        let entry = body.find(post => post.id === id);
        if(!entry) return message.channel.send("This entry does not exist!");

        let embed = new Discord.RichEmbed()
            .setAuthor(embed.userId)
            .set
            .setDescription(embed.body);
            
        message.channel.send({embed});    
    });
}

module.exports.help = {
    name: "buzzfeed"
}