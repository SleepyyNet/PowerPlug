exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first() || message.author;
    console.log(args);
    args = args.join(' ').replace(/<@!?[0-9]+>/g, '').split(' | ');
    console.log(args);
    const top = args[0].trim();
    const bottom = args[1].trim();
    message.channel.send(`https://memegen.link/custom/${top}/${bottom}.jpg?alt=${user.displayAvatarURL}`)  
}