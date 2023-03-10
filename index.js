const discord = require("discord.js");
require("./extras/clear");
const config = require("./config.json");

const client = new discord.Client({
  intents: [discord.GatewayIntentBits.Guilds],
});

client.slash = new discord.Collection();

["eventHandlers", "commandHandlers"].forEach((folder) => {
  require(`./handler/${folder}`)(client, discord);
});

// client.on("interactionCreate", (bot) => {
//   console.log(`Bot: ${bot.user.username} - Online -`);
// });

client.login(config.token);
