exports.run = async (bot, message, args) => {
  const messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
}
