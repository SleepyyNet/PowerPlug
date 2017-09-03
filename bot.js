const settings = require('./settings.json');
const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client();

const prefix = settings.prefix;


bot.on("ready", async () => {
    console.log(`PowerPlug is plugged in! Username: ${bot.user.username}`);
    bot.user.setAvatar("https://cdn.discordapp.com/attachments/350173567675006977/350173647081570324/Unbenannt1.png");
    bot.user.setPresence({ game: { name: 'pp2!help for help', type: 0 } });
    try {
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        let github = "https://github.com/codefromcirc/powerplugjs";
        console.log("Invite: " + link);
        console.log("Prefix: " + prefix)
        console.log("GitHub: " + github)

    } catch(e) {
        console.log(e.stack);
    }
});

bot.on("message", async message => {
  if (message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;


  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

   try {
    let commandFile = require(`./cmds/${command}.js`);
    commandFile.run(bot, message, args);
  } catch (err) {
    console.error(err);
  }
  });


bot.login(settings.token)