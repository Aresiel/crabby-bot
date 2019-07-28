console.log("Starting bot...");  
const botconfig = require('./botconfig.json');

const token = botconfig.BOT_TOKEN;
const prefix = botconfig.PREFIX;
const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const bot = new Commando.Client({

  commandPrefix: prefix

});

bot.registry.registerGroup('fun', 'Fun');
bot.registry.registerGroup('admin', 'Admin');
bot.registry.registerDefaultTypes().registerDefaultGroups().registerDefaultCommands({

  ping: false,
  prefix: false,
  commandState: false,
  eval: false

});
bot.registry.registerCommandsIn(__dirname + "/commands");




bot.on('ready', async () => {
  console.log(`Bot has started.`); 
  bot.user.setActivity(`${process.env.PREFIX}help`, { type: 'WATCHING' })
})

bot.on('message', function(message) { //Hidden commands here
  
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0].toUpperCase();
    let args = messageArray.slice(1);
  
  if(message.channel.id == "604389323416010762" && message.author.id != "604725479517192212"){
    message.delete()
  }
  
  
  
});

console.log("Logging in...")
bot.login(token)