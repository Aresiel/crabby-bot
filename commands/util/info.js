const commando = require("discord.js-commando");
const discord = require("discord.js");
const bot = new commando.Client();


class InfoCommand extends commando.Command {

    constructor(client) {

        super(client, {

            name: 'info',
            group: 'util',
            memberName: "info",
            description: 'A command for finding out stuff about things.'
        })

    }

    async run(message, args) {

        const embed = {
            "description": "What do you want information about?\nReply with:\n· Bot\n· Server\n· Cancel",
            "color": 3553598,
            "fields": []
        };
        message.channel.send({
            embed
        });

        const filter = m => m.content.includes(args);
        const collector = message.channel.createMessageCollector(filter);

        collector.on('collect', res => {
            if (res.author.id != message.author.id) return;
            if (res.content.toLowerCase() == "bot") {
                return message.channel.send({embed: {
                  color: 3553598,
                  "thumbnail": {
                    "url": client.user.displayAvatarURL
                  },
                  title: "Bot info",
                  fields: [{
                    name: "Botname",
                    value: "Crabby",
                  },
                  {
                    name: "Creator",
                    value: "Aresiel#0666"
                  },
                  {
                    name: "Prefix",
                    value: "C!",
                  },
                  {
                    name: "Source",
                    value: "[Click Here](https://glitch.com/~crabby-bot)"
                  }

                ],
                  timestamp: new Date(),
                }});
                collector.stop()
                clearTimeout(cancelTimeout);
            }
            if (res.content.toLowerCase() == "server") {
                const embed = {
                  "title": res.guild.name + " info",
                  "color": 3553598,
                  "thumbnail": {
                    "url": res.guild.iconURL 
                  },
                  "fields": [
                    {
                      "name": "Members",
                      "value": "This guild has " + res.guild.memberCount + "members. "
                    },
                    {
                      "name": "Owner",
                      "value": "<@" + res.guild.owner.id + ">"
                    },
                    {
                      "name": "Join date",
                      "value": "You joined at " + res.member.joinedAt
                    }
                  ]
                };
                message.channel.send({ embed });
                collector.stop()
                clearTimeout(cancelTimeout);
            }
            if (res.content.toLowerCase() == "cancel") {
                const embed = {
                    "description": "Canceled.",
                    "color": 3553598,
                    "fields": []
                };
                message.channel.send({
                    embed
                });
                collector.stop()
                clearTimeout(cancelTimeout);
            }
        });

        var cancelTimeout = setTimeout(function() {
            collector.stop
        }, 30000);



    }

}

module.exports = InfoCommand;
