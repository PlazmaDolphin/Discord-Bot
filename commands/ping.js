module.exports =
{
    name : 'ping',
    description: 'its a ping command',
    execute(message)
    {
        message.channel.send('who tf pinged me\nhow could you do this');
    },
};