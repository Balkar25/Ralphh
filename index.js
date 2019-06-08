const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$$";
client.login('NTg2NDYyOTQ2Njc5NTg2ODI4.XPuN9Q.2OIyimwdviCAqB0yfFLwkksGUF4');

client.on('message', message =>{
    if(message.content === "$$Tu fais quoi ?"){
        message.reply('Je cherche Vaneloppe :mag_right:');
        console.log('répond a tfk')
    }
});

client.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
     .setDescription(':tada: ** ' + member.user.username + ' ** a rejoint le serveur '+ member.guild.name)
     .setFooter('Nous sommes désormais '+ member.guild.memberCount)
    member.guild.channels.get('586467583104909324').send(embed)
    member.addRole('586483263355355136')

});