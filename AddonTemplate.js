const { Client, Message, MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const fs = require('fs')
const YAML = require('yaml')
const General = YAML.parse(fs.readFileSync('./././Configurations/General.yml', 'utf8'))
const Colors = YAML.parse(fs.readFileSync('./././API/Colors.yml', 'utf8'))
// Required assets including Discord.JS v13 with non required assets such as fs, YAML, general & colors configurations.

module.exports = {
    name: 'Command',
    description: 'Description',
    UserPerms: ['Permissions'],
    options: [{
        name: '1',
        type: '2',
        description: '3',
        required: true/false,
    }]
    run: async (client, interaction) => {

    }
}

// Put this file in */Commands/Addons/ Please note that some commands are required by syrex and wont be replaceable with custom addons. As well as all of the commands requiring the original index to execute.
// Support for custom addons will not be provided from Syrex Development but may be from other communities.
