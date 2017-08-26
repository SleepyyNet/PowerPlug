module.exports.run = async (bot, message, args) => {
    const saymessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(saymessage);
}
module.exports.help = {
    name: "say"
}