const { google } = require('googleapis');
const Discord = require('discord.js');
var hexcode = '#000000';
const { youtubeKey } = require('../config.json');
module.exports =
{
    name : 'search',
    description: 'embed time',
    execute(message, args)
    {
        var spaceString = '';
        for(var i = 0; i < args.length; i++)
        {
            spaceString += args[i];
            if(i < args.length - 1)
            {
            spaceString += ' ';
            }
        }
        google.youtube('v3').search.list({
        key: youtubeKey,
        part: 'snippet',
        q: spaceString,
    }).then((response) => {
        const { data } = response;
        hexcode = '#ff0000';
        var embed = new Discord.MessageEmbed()
            .setTitle(spaceString);
        embed.setColor(hexcode);
        for(var i2 = 0; i2 < 4; i2++)
        {
            if (data.items[i2].snippet.description == '') {
                data.items[i2].snippet.description = 'no desc';
            }
            embed.addFields(
            {
                name: data.items[i2].snippet.title,
                value: data.items[i2].snippet.description,
                inline: false,
            });
            console.log(data.items[i2]);
        }
        embed.setImage(data.items[1].snippet.thumbnails.medium.url);
        message.channel.send(embed);
    }).catch((err) => console.log(err));
    },
};