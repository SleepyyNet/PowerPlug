exports.run = async (client, msg, args) => {
    const saymessage = args.join(" ");
    msg.channel.send(saymessage);
}

exports.help = {
   name: "say",
   description: "Says something. Duh!",
   usage: "<query:str>",
   usageDelim: "",
 };

exports.conf = {
   enabled: true,
   runIn: ["text", "dm", "group"],
   aliases: ["copy"],
   permLevel: 0,
   botPerms: [],
   requiredFuncs: [],
   requiredSettings: [],
 };