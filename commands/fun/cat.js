const commando = require("discord.js-commando");
const fetch = require('node-fetch');

class CatPicCommand extends commando.Command  {
  
  constructor(client)  {
    
    super(client,{
    
      name: 'cat',
      group: 'fun',
      memberName: "cat",
      description: 'Shows you an pic of an cat.'
      
    })
    
  }
  
  async run(message, args){
  
    const fetch = require('node-fetch');
  fetch('https://api.thecatapi.com/v1/images/search').then(res => res.json()).then(json => {
  let catUrl = json[0].url
    
  const embed = {
  "title": "Cat! :cat:",
  "color": 15031581,
  "image": {
    "url": catUrl
  },
  "fields": []
  };
  message.channel.send({ embed });
  
  } );
    
  }
  
}

module.exports = CatPicCommand;