module.exports =
{
    name : 'pyramid',
    description: 'does pyramid',
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
        const maxCharacters = 61;
        const characters = [...spaceString];
        if (characters.length > maxCharacters)
        {
            message.channel.send(`Limit of ${maxCharacters} characters exceeded by ${characters.length - maxCharacters}`);
        }
        else
        {
         var soFar = '';
         var wholeMessage = '';
         for(var i2 = 0; i2 < characters.length; i2++)
         {
            soFar += characters[i2];
            wholeMessage += `\n${soFar}`;
         }
         message.channel.send(wholeMessage);
        }
    },
};