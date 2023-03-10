module.exports = {
  name: "join",
  description: "Unirce a un canal de voz",
  run: async (client, interaction) => {
    if (interaction.member.voice.channel) {
      return await interaction.reply(`XD`);
    }
    return await interaction.reply({
      content: "Debes estar en un canal de voz primero",
      ephemeral: true,
    });
  },
};
