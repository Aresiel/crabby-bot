const commando = require("discord.js-commando");

class CoinFlipCommand extends commando.Command  {
  
  constructor(client)  {
    
    super(client,{
    
      name: 'flip',
      group: 'fun',
      memberName: "flip",
      description: 'Flips a coin.'
      
    })
    
  }
  
  async run(message, args){
  
    let coin = Math.floor(Math.random() * 99);
    if(coin == "66"){
      return message.channel.send("The coin landed on it's edge! What are the chances?");
    }
    
    if(coin <= "49") {
    
      return message.channel.send("The coin landed on tails.");
      
    } else {
    
      return message.channel.send("The coin landed on heads.");
    
    }
  }
  
}

module.exports = CoinFlipCommand;