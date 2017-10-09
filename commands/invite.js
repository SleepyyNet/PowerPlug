exports.run = async (client, msg, args) => {
    msg.channel.send("https://bit.ly/PowerPlug");
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

exports.help = {
   name: "invite",
   description: "Gives the first step of plugging your server in to the source",
   usage: "",
   usageDelim: "",
}