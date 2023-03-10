const fs = require("fs");

let eventos = [];
let total = 0;

module.exports = (client, discord) => {
  const archivos = fs
    .readdirSync("./events")
    .filter((file) => file.endsWith(".js"));
  total = archivos.length;
  for (let file of archivos) {
    try {
      let event = file.slice(0, file.length - 3);
      const run = require(`../events/${file}`);
      client.on(event, run.bind(null, client, discord));
      eventos.push(event);
    } catch (error) {
      console.log(`Ocurrio un error al agregar el evento ${file}`);
    }
  }
  console.log(
    `Se agregaron ${eventos.length} eventos de ${total} eventos en total`
  );
};
