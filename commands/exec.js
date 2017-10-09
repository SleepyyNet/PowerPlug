const { exec } = require('child_process');
const settings = require('../settings.json')
exports.run = async (client, msg, args) => {
    if (msg.author !== settings.ownerid) return;
    exec(args.join(" "), function(error, stdout, stderr) {
    msg.channel.send('stdout: ' + stdout);
    msg.channel.send('stderr: ' + stderr);
    if (error !== null) {
        msg.channel.send('exec error: ' + error);
    }
});
}


exports.help = {
   name: "exec",
   description: "executes system commands (for the owner)",
   usage: "<query:str>",
   usageDelim: "",
}

exports.conf = {
   enabled: true,
   runIn: ["text", "dm", "group"],
   aliases: [],
   permLevel: 0,
   botPerms: [],
   requiredFuncs: [],
   requiredSettings: [],
}