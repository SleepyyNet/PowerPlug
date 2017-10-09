exports.run = async (client, msg, args) => {
    const user = msg.mentions.users.first();
    const amount = !!parseInt(msg.content.split(' ')[1]) ? parseInt(msg.content.split(' ')[1]) : parseInt(msg.content.split(' ')[2])
    if (!amount) return message.reply('Must specify an amount to delete!');
    if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
    msg.channel.fetchMessages({
    limit: amount,
    }).then((messages) => {
    if (user) {
    const filterBy = user ? user.id : client.user.id;
    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
    }
    msg.channel.bulkDelete(messages).catch(error => console.log(error.stack));
    });
}

exports.conf = {
   enabled: true,
   runIn: ["text"],
   aliases: ["bdelete"],
   permLevel: 0,
   botPerms: [],
   requiredFuncs: [],
   requiredSettings: [],
}

exports.help = {
   name: "purge",
   description: "Bulk-deletes messages",
   usage: "<amount:int>",
   usageDelim: "",
}