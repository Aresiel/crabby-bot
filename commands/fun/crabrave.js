const commando = require("discord.js-commando");
const fetch = require('node-fetch');
const fs = require('fs');

class CrabRavePicCommand extends commando.Command  {
  
  constructor(client)  {
    
    super(client,{
    
      name: 'crabrave',
      group: 'fun',
      memberName: "crabrave",
      description: 'You know what this will do.'
      
    })
    
  }
  
  async run(message, args){
  
  const embed = {
  "title": "Crabrave! :crab::tropical_drink::crab:",
  "color": 15031581,
  "image": {
    "url": "https://i.imgur.com/yUqx1Jm.gif"
  },
  "fields": []
  };
  message.channel.send({ embed });
   

  }
  
}

module.exports = CrabRavePicCommand;