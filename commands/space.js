module.exports =
{
    name : 'space',
    description: 'g i v e s y o u s p a c e s',
    execute(message, args)
    {
        var spaceString = '';
        for(var i2 = 0; i2 < args.length; i2++)
        {
            spaceString += args[i2];
            if(i2 < args.length - 1)
            {
            spaceString += ' ';
            }
        }
        var wholeMessage = '';
        const maxCharacters = 990;
        const characters = [...spaceString];
        if (characters.length > maxCharacters)
        {
            message.channel.send(`Your message is too long!\nLimit is ${maxCharacters} characters.`);
        }
        else
        {
            for(var i = 0; i < characters.length; i++)
            {
                wholeMessage += characters[i] + ' ';
            }
            message.channel.send(wholeMessage);
        }
    },
};