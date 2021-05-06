module.exports =
{
    name : 'reverse',
    description: 'reverses da message',
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
        const characters = [...spaceString];
        var wholeMessage = '';
        for(var i = characters.length - 1; i > -1; i--)
        {
            wholeMessage += characters[i];
        }
        message.channel.send(wholeMessage);
    },
};