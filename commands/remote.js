module.exports =
{
    name : 'remote',
    description: 'sends a message to a specified channel',
    execute(message, args, client)
    {
        var theChannel = args.shift().slice(2, -1);
        var spaceString = '';
        for(var i = 0; i < args.length; i++)
        {
            spaceString += args[i];
            if(i < args.length - 1)
            {
            spaceString += ' ';
            }
        }
        const target = client.channels.cache.get(theChannel);
        if (target) target.send(spaceString);
        else message.channel.send(theChannel + ' is an invalid channel ID');
    },
};