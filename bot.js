const settings = require('./settings.json');
const Discord = require('discord.js');
const fs = require('fs');

let points = JSON.parse(fs.readFileSync("./levels/points.json", "utf8"));

const prefix = settings.prefix;

const bot = new Discord.Client({disableEveryone: true})
bot.commands = new Discord.Collection();

    fs.readdir("./cmds/", (err, files) => {
    if(err) console.error(err);


    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No main commands to load");
        return;
    }

    console.log(`${jsfiles.length} main commands to load.`)

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded!`)
        bot.commands.set(props.help.name, props);
    });
    
    fs.readdir("./levels/", (err, files) => {
    if(err) console.error(err);


    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No level commands to load");
        return;
    }

    console.log(`${jsfiles.length} level-related commands to load.`)

    jsfiles.forEach((f, i) => {
        let props = require(`./levels/${f}`);
        console.log(`${i + 1}: ${f} loaded!`)
        bot.commands.set(props.help.name, props);
    });
});


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
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ")
    let command = messageArray[0];
    let args = messageArray.slice(1);

   if(!command.startsWith(prefix)) return;

   let cmd = bot.commands.get(command.slice(prefix.length));
   if(cmd) cmd.run(bot, message, args);

   if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0
  };

    let userData = points[message.author.id];
    userData.points++;

    
    let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
    if (curLevel > userData.level) {
        userData.level = curLevel;
        message.reply(`You"ve leveled up to level **${curLevel}**! How does that feel?`);
    }
    if (message.content.startsWith(prefix + "level")) {
        message.reply(`You are currently level ${userData.level}, with ${userData.points} points.`);
    }
    
    fs.writeFile("./levels/points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)

    });

  });
});

bot.login(settings.token)