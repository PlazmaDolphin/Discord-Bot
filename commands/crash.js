module.exports =
{
    name : 'crash',
    description: 'nyoom',
    execute(message)
    {
        message.channel.send('haha car go nyoooooooooooooom');
        setTimeout(() => message.channel.send('CRAASSSSH!'), 2000);
    },
};