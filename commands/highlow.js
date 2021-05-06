const Discord = require('discord.js');
module.exports =
{
    name : 'highlow',
    description: 'plays my game of higher or lower',
    execute(message, args)
    {
        var min = args[0];
        var max = args[1];
        var guess = 0;
        var totalGuesses = args[2];
        var higherthan = min;
        var lowerthan = max;
        const filter = (m) => m.author.id === message.author.id;
        const collector = new Discord.MessageCollector(message.channel, filter);
        const GUESSES_GIVEN = totalGuesses;
        message.channel.send(`I'm thinking of a number between ${min} and ${max}`);
        var secretNumber = Math.floor(Math.random() * (max - min)) + parseInt(min);
        inputGuess();
        function inputGuess()
        {
            collector.on('collect', (msg) =>
            {
                guess = msg.content;
                if (msg.content === 'stop')
                {
                    collector.stop();
                    message.channel.send('Stopped.');
                }
                else if (isNaN(guess))
                {
                    message.channel.send('this isnt a number what the frick bro');
                }
                else
                {
                    compare(guess);
                }
            });
        }
        function compare(input)
        {
            if (input == secretNumber)
            {
                totalGuesses--;
                // win function
                message.channel.send(`Congratulations, the secret number was ${secretNumber}\nYou had ${totalGuesses} guesses remaining.`);
                collector.stop();
            }
            else if (totalGuesses <= 1)
            {
                // lose function
                message.channel.send(`You fucking idiot, it took you ${GUESSES_GIVEN} guesses and you still haven't guessed the number was ${secretNumber}.`);
                collector.stop();
            }
            else if (guess >= secretNumber)
            {
                totalGuesses--;
                message.channel.send(`The number is lower than ${guess} and higher than ${higherthan}\n You have ${totalGuesses} guesses remaining.`);
                lowerthan = guess;
            }
            else if (guess <= secretNumber)
            {
                totalGuesses--;
                message.channel.send(`The number is higher than ${guess} and lower than ${lowerthan}\n You have ${totalGuesses} guesses remaining.`);
                higherthan = guess;
            }
            else
            {
                message.channel.send('somethings wrong i can feel it');
            }
        }
    },
};