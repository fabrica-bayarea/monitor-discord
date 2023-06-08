const { Events,EmbedBuilder, AttachmentBuilder} = require('discord.js');
const {roleAluno } = require('../../config.json');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isModalSubmit()) return;
        if (interaction.customId === 'cadastro') {
    
            const nome = interaction.fields.getTextInputValue('nomeInput');
            const sobrenome = interaction.fields.getTextInputValue('sobrenomeInput');
            const turma = interaction.fields.getTextInputValue('turmaInput');
    
            const member = interaction.member;
    
            const novoApelido = `${nome.charAt(0).toUpperCase() + nome.substring(1)} ${sobrenome.charAt(0).toUpperCase()}. - (${turma.toUpperCase()})`;
            await member.setNickname(novoApelido);
    
            const role = interaction.guild.roles.cache.find(role => role.name === roleAluno);
            await member.roles.add(role);
    
            const file = new AttachmentBuilder('./src/public/monitoria.jpeg');
    
            const exampleEmbed = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Cadastro efetuado com sucesso!')
                .setDescription(`Bem-vindo, ${member.nickname} ! Seu cadastro foi realizado com sucesso no servidor de monitoria do IESB.. Você está agora integrando a nossa comunidade dedicada ao sucesso acadêmico.`)		
                .setImage('attachment://monitoria.jpeg')
                .setTimestamp()
                
            await interaction.reply({ embeds: [exampleEmbed], files: [file]});
        }
    }
};