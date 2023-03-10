const fs = require("fs");

let cmd = [];
let cmdTotal = 0;

module.exports = (client, discord) => {
  const archivos = fs
    .readdirSync("./commands")
    .filter((file) => file.endsWith(".js"));
  cmdTotal = archivos.length;
  for (let file of archivos) {
    try {
      const name = file.slice(0, file.length - 3);
      const command = require(`../commands/${name}`);
      client.slash.set(command.name, command);
      cmd.push(command);
    } catch (error) {
      console.log(error);
      console.log(`Ocurrio un error al agregar el comando ${file}`);
    }
  }
  console.log(
    `Se agregaron ${cmd.length} comandos de ${cmdTotal} comandos en total`
  );
  client.on("ready", async () => {
    await client.application.commands.set(cmd);
  });
};
