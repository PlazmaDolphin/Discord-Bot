const Discord = require('discord.js');
module.exports =
{
    name: 'onewordgame',
    description: 'starts the one word game',
    execute(message, args)
    {
        var sentence_length = 0;
        if (!isNaN(args[0]))
        {
            message.channel.send('to end the sentence early, type "++period++"');
            sentence_length = args[0];
        }
        else
        {
            message.channel.send('to end the sentence, type "++period++"');
            sentence_length = 999999999;
        }
        const filter = (m) => m.channel === message.channel && !m.author.bot;
        var words = '';
        const collector = new Discord.MessageCollector(message.channel, filter);
        var i = 0;
        collector.on('collect', (msg) =>
        {
            const messageo = msg.content.trim().split(/ +/);
            if(msg.content != '++period++')
            {
                var word = messageo[0] + ' ';
                words += word;
                i++;
            }
            if (i >= sentence_length || msg.content == '++period++' || words.length >= 1900)
            {
                message.channel.send('Sentence complete.');
                message.channel.send(words);
                collector.stop();
                console.log(words);
            }
        });
    },
};