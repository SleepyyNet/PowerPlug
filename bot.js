const komada = require("komada");
const settings = require('./settings.json');

const client = new komada.Client({
  ownerID : settings.ownerid,
  prefix: settings.prefix,
  clientOptions: {
    fetchAllMembers: false,
  },
  cmdLogging: true,
});


client.login(settings.token);

