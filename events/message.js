const Discord = require('discord.js');
const data = require('quick.db');

module.exports = async message => {
  
  let client = message.client;
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;
  let prefix = client.ayarlar.prefix;
  if (message.content.startsWith(prefix)) {
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
/////////////
 if(cmd && cmd.help.name !== 'bakım-modu') {
  const neblmölçmedimikamk = await require('quick.db').fetch(client.user.id);
  if(neblmölçmedimikamk == true) {
  var DURATION = require('humanize-duration');
  const chimped = await ('database.fetch(client.user.id+:)');
  var TIMESTAMP = Date.now() - chimped.time;
  var RESULT = DURATION(TIMESTAMP, { language: 'tr', round: true, conjunction: ', ', serialComma: false });
  message.react('❌');
  return message.reply(`***${client.user.username}*** şu anda bakımda.\nYaklaşık ***${RESULT} önce*** bakıma alınmış.\nBakıma alan: ***${chimped.author.tag}***`);
  };
  };    
    //////////////
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
  }

};
