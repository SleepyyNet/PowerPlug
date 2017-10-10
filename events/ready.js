const settings = require('../settings.json');
const snek = require('snekfetch');
exports.run = async (client) => {
    client.user.setStatus(`${settings.prefix}help for help`);
    snek.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
    .set('Authorization', 'YOUR DISCORDBOTS.ORG API TOKEN')
    .send({ server_count: client.guilds.size })
    .then(() => console.log('Updated discordbots.org stats.'))
    .catch(err => console.error(`Whoops something went wrong: ${err.body}`));
}