const commando = require("discord.js-commando");
const fetch = require('node-fetch');
const fs = require('fs');

class CrabPicCommand extends commando.Command {

    constructor(client) {

        super(client, {

            name: 'crab',
            group: 'fun',
            memberName: "crab",
            description: 'The zenith of commands.'

        })

    }

    async run(message, args) {

        if (args == "info") {
            const embed = {
                "color": 	3553598,
                "description": "DM `Aresiel#0666` with the ID, you can find the ID in the footer."
            };
            return message.channel.send({
                embed
            });
        }

        let crabData = JSON.parse(fs.readFileSync(__dirname + "/../../images/crab.json").toString())

        let crabUrlId = Math.floor(Math.random() * crabData.length)
        let crabUrl = crabData[crabUrlId - 1];

        const embed = {
            "title": "Crab! :crab: ",
            "color": 15031581,
            "footer": {
                "text": "Is this not a crab? Run ?crab info for more information. ID: " + crabUrlId
            },
            "image": {
                "url": crabUrl
            },
            "fields": []
        };
        message.channel.send({
            embed
        });


    }

}

module.exports = CrabPicCommand;