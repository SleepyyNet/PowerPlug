const settings = require('./settings.json');
const Discord = require('discord.js');
const prefix = settings.prefix;

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
    console.log(`PowerPlug is plugged in! Username: ${bot.user.username}`);
    try {
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log("Invite: " + link);
        console.log("Prefix: " + prefix)
    } catch(e) {
        console.log(e.stack);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ")
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    if(command === `${prefix}userinfo`) {
        let embed  = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("This user's info!")
            .setColor("#ff0000")
            .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
            .addField("User ID", message.author.id)
            .addField("Account created at", message.author.createdAt)
            .image(message.author.icon);
 


    message.channel.sendEmbed(embed);  

    if(command === `${prefix}servinfo`) {
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("This server's info")
        .setColor("#ff0000")
        .addField("Server Name", message.guild.name)
        .addField("Server ID", message.guild.id)
        .addField("Amount of members", message.guild.memberCount)
        .addField("Server Region", message.guild.region)
        .addField("Roles", message.guild.roles)
        .image(message.guild.icon);

    message.channel.sendEmbed(embed);    

    }

    return; 
} 

});

bot.login(settings.token)