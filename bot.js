const settings = require('./settings.json');
const Discord = require('discord.js');
const fs = require('fs');
const snekfetch = require('snekfetch')
const bot = new Discord.Client();
const prefix = settings.prefix;



const music = require('discord.js-music-v11')
music(bot, {
        prefix: prefix,
        global: false,
        maxQueueSize: 10,
        clearInvoker: true,
        anyoneCanSkip: true
});

bot.on("ready", async () => {
    console.log(`PowerPlug is plugged in! Username: ${bot.user.username}`);
    bot.user.setAvatar("https://cdn.discordapp.com/attachments/350173567675006977/350173647081570324/Unbenannt1.png");
    bot.user.setPresence({ game: { name:   `${prefix}help for help`, type: 0 } });
    try {
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        let github = "https://github.com/codefromcirc/powerplug";
        console.log("Invite: " + link);
        console.log("Prefix: " + prefix)
        console.log("GitHub: " + github)

    } catch(e) {
        console.log(e.stack);
    }
});

bot.on("message", async message => {
	if(message.author.bot) return;
    let prefix = require(`./prefix/${message.guild.id}.json`)
    if(!message.content.startsWith(prefix.Prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
            let maincommands = require(`./cmds/${command}.js`);
            maincommands.run(bot, message, args);
            let minigamecommands = require(`./games/${command}.js`);
            minigamecommands.run(bot, message, args);
    } catch(e) {
            console.log(e.stack)
    }

});

bot.on("guildCreate", g => {
  let res = {guild : g}
  let maincommands = require(`./cmds/prefix.js`);
  maincommands.run("kek", res, "prefix pp");
})

bot.login(settings.token)
