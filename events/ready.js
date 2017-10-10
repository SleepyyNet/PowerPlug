const settings = require('../settings.json');
const snek = require('snekfetch');
exports.run = async (client) => {
    client.user.setStatus(`${settings.prefix}help for help`);
    snek.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
        .set("Authorization", settings.keys.dbl)
        .send({"server_count":client.guilds.size})
        .then(console.log("Server count at DBL updated!"));
}