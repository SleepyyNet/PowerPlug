exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first() || message.author;
    args = args.join(' ').replace(user.toString() + ' ', '').split(' | ');
    const top = args[0];
    const bottom = args[1];
    message.channel.send(`https://memegen.link/custom/${top}/${bottom}.jpg?alt=${user.displayAvatarURL}`)
}