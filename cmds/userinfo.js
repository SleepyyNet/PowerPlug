const Discord = require('discord.js');
const fs = require('fs');
exports.run = async (bot, message, args) => {
    let points = JSON.parse(fs.readFileSync("../points.json", "utf8"));    
    if (!points[message.author.id]) points[message.author.id] = {
            points: 0,
            level: 0
    };
    let userData = points[message.author.id];
    userData.points++;

    let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
    if (curLevel > userData.level) {
        // Level up!
        userData.level = curLevel;
        message.reply(embed);
    }
        let embed = new Discord.RichEmbed()
                .setAuthor(target.username)
                .setThumbnail(target.avatarURL)
                .setDescription("This user's info!")
                .setColor("#ff0000")
                .addField("Full Username", `${target.username}#${target.discriminator}`)
                .addField("User ID", target.id)
                .addField("Account created at", target.createdAt)
                .addField("PowerLevel", curLevel)
                .addField("PowerPoints", userData.points++);

            
       message.channel.send({embed});     

}
