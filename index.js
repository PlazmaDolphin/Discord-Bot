// const { google } = require('googleapis');
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const { prefix, token, bot_age, words_array, bot_info } = require('./config.json');

client.once('ready', () => {
    console.log('ready');
});

client.login(token);

for(const file of commandFiles)
{
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);
    try
    {
        command.execute(message, args, client);
    }
    catch (error)
    {
        console.error(error);
        message.reply('Issue executing command');
    }
/*
	if (command === 'vore') {
        if(!args.length)
        {
            return message.channel.send(`You havent input arguements, ${message.author}!`);
        }

        else {
        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
        }
    }
    else if (command === 'ban')
    {
        const taggedUser = message.mentions.users.first();
        message.channel.send(`${taggedUser.username} has been banned.`);
        return;
    }
    else if (message.content === `${prefix}mario`) {
        message.channel.send('weegee');
    }*/
});