const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const { canalWelcome } = require('../../config.json');

module.exports = {
  name: 'guildMemberAdd',
  execute(member) {
    console.log(`${member.user.username} entrou no servidor.`);

    const channel = member.guild.channels.cache.find((channel) => channel.name === canalWelcome);
    if (!channel) return;

    const welcomeMessage = new EmbedBuilder()
      .setTitle('Bem-vindo ao servidor de monitoria do IESB!')
      .setDescription('Estamos felizes em tê-lo(a) aqui. Para aproveitar ao máximo os benefícios do nosso programa de monitoria, clique no botão abaixo e faça o seu cadastro. Juntos, vamos tornar sua jornada acadêmica ainda mais brilhante.')
      .setColor('#00ff00')

    const confirm = new ButtonBuilder()
      .setCustomId('confirm')
      .setLabel('Cadastra-se')
      .setStyle(ButtonStyle.Primary);

    const row = new ActionRowBuilder().addComponents(confirm);

    channel.send({ embeds: [welcomeMessage], components: [row] });
  },
};