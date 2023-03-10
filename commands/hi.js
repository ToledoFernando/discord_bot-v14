module.exports = {
  name: "hi",
  description: "Te saluda",
  run: async (client, interaction) => {
    return await interaction.reply({
      content: `Hello ${interaction.member.user.username}`,
      ephemeral: true,
    });
  },
};
