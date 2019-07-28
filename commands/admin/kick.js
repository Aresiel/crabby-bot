const commando = require("discord.js-commando");

class KickCommand extends commando.Command  {
  
  constructor(client)  {
    
    super(client,{
    
      name: 'kick',
      group: 'admin',
      memberName: "kick",
      description: 'mg!kick @User <Reason>'
      
    })
    
  }
  
  async run(message, shitargs){
    
    let args = shitargs.split(' ');
    if(!message.mentions.members.first()) return message.channel.send("You didn't mention anyone.");
    let user = message.mentions.members.first();
    let reason = args.slice(1).join(' ')
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("You do not have permission to kick anyone.");
    if(!user.kickable) return message.channel.send("I cannot kick that person.");
    
    if(reason.length > 3){
      user.kick([reason])
      return message.channel.send(`Kicked <@${user.id}> aka "${user.displayName} with the reason: "${reason}"`);
    } else {
      user.kick([reason])
      return message.channel.send(`Kicked <@${user.id}> aka "${user.displayName} with no reason given.`);
    }
  }
  
}

module.exports = KickCommand;