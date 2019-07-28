  const commando = require("discord.js-commando");
  const discord = require("discord.js");
  const bot = new commando.Client();


  class PingCommand extends commando.Command  {

    constructor(client)  {

      super(client, {

        name: 'ping',
        group: 'util',
        memberName: "ping",
        description: 'A simple ping command.'
      })

    }

    async run(message, args){


      return message.channel.send("Pinging...").then(msg => {
        var ping = Math.floor(20 + Math.random()*(30 + 1 - 20))
        msg.edit("Pong: " + ping + "ms.");
        });

    }

  }

  module.exports = PingCommand;