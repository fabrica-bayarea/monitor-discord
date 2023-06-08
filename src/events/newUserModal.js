const { Events, ModalBuilder, TextInputStyle, TextInputBuilder, ActionRowBuilder } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isButton()) return;

        if (interaction.customId === 'confirm') {

            const modal = new ModalBuilder()
                .setCustomId('cadastro')
                .setTitle('Efetue seu cadastro:');

            const nomeInput = new TextInputBuilder()
                .setCustomId('nomeInput')
                .setLabel("Digite seu nome: ")
                .setStyle(TextInputStyle.Short);

            const sobrenomeInput = new TextInputBuilder()
                .setCustomId('sobrenomeInput')
                .setLabel("Digite seu sobrenome: ")
                .setStyle(TextInputStyle.Short);

            const turmaInput = new TextInputBuilder()
                .setCustomId('turmaInput')
                .setLabel("Digite a sua turma: ")
                .setStyle(TextInputStyle.Short);

            const nomeRow = new ActionRowBuilder().addComponents(nomeInput);
            const sobrenomeRow = new ActionRowBuilder().addComponents(sobrenomeInput);
            const turmaRow = new ActionRowBuilder().addComponents(turmaInput);

            modal.addComponents(nomeRow, sobrenomeRow, turmaRow);
            await interaction.showModal(modal);
        }
    }
};