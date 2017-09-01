const Discord = require('discord.js');
const fs = require('fs');
module.exports.run = async (bot, message, args) => {
        let points = JSON.parse(fs.readFileSync("../powerplugjs/levels/points.json", "utf8"));
        if (!points[message.author.id]) points[message.author.id] = {
                points: 0,
                level: 0
        };
        let userData = points[message.author.id];
        userData.points++;
        let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
        if (curLevel > userData.level) {
            userData.level = curLevel;
        }
       let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setThumbnail(message.author.avatarURL)
            .setDescription("This user's info!")
            .setColor("#ff0000")
            .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
            .addField("User ID", message.author.id)
            .addField("Account created at", message.author.createdAt)
            .addField("PP-Level", userData.level)
            .addField("PP-Points", userData.points);
            
       message.channel.send({embed});     

}

module.exports.help = {
    name: "userinfo" 
    
}