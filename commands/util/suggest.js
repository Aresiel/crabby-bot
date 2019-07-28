const commando = require("discord.js-commando");
const discord = require("discord.js");
const bot = new commando.Client();


class SuggestCommand extends commando.Command {

    constructor(client) {

        super(client, {

            name: 'suggest',
            group: 'util',
            memberName: "suggest",
            description: 'A command for suggestions, use in <#604389323416010762>. Usage: ?suggest <suggestion>'
        })

    }

    async run(message, args) {

      if(message.channel.id != "604389323416010762") return message.channel.send("Only use this in <#604389323416010762>!")

      if(args.length < 5) return;
      
        const embed = {
            "title": "Suggestion",
            "description": args,
            "color": 15031581,
            "author": {
                "name": message.author.tag,
                "icon_url": message.author.displayAvatarURL
            },
            "fields": []
        };
        message.channel.send({
            embed
        });

    }

}

module.exports = SuggestCommand;