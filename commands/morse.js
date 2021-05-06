const dict = {
    'A' : '.-', 'B' : '-...', 'C' : '-.-.', 'D' : '-..',
    'E' : '.', 'F' : '..-.', 'G' : '--.', 'H' : '....',
    'I' : '..', 'J' : '.---', 'K' : '-.-', 'L' : '.-..',
    'M' : '--', 'N' : '-.', 'O' : '---', 'P' : '.--.',
    'Q' : '--.-', 'R' : '.-.', 'S' : '...', 'T' : '-',
    'U' : '..-', 'V' : '...-', 'W' : '.--', 'X' : '-..-',
    'Y' : '-.--', 'Z' : '--..',
    '1' : '.----', '2' : '..---', '3' : '...--', '4' : '....-', '5' : '.....',
    '6' : '-....', '7' : '--...', '8' : '---..', '9' : '----.', '0' : '-----',
    '.' : '.-.-.-', ',' : '--..--', '?' : '..--..', '\'' : '.----.', '!' : '-.-.--',
    '/' : '-..-.', '(' : '-..-.', ')' : '-.--.-', '&' : '.-...', ':' : '---...',
    ';' : '-.-.-.', '=' : '-...-', '+' : '.-.-.', '-' : '-....-', '_' : '..--.-',
    '"' : '.-..-.', '$' : '...-..-', '@' : '.--.-.',
};
function toMorse(word)
{
    const chars = [...word];
    var mword = '';
    switch (word) {
        case '[ERROR]':
            return '........';
        case '[END]':
            return '...-.-';
        case '[START]':
            return '-.-.-';
        case '[UNDERSTOOD]':
            return '...-.';
        default:
            for(var i = 0; i < chars.length; i++)
            {
                try {
                    mword += dict[chars[i]];
                } catch (error) {
                    mword += chars[i];
                }
            }
            return mword;
    }
}
module.exports =
{
    name : 'morse',
    description: 'converts text to morse code',
    execute(message, args)
    {
        var spaceString = '';
        for(var i = 0; i < args.length; i++)
        {
            spaceString += toMorse(args[i].toUpperCase());
            if(i < args.length - 1)
            {
            spaceString += ' / ';
            }
        }
        message.channel.send(spaceString);
    },
};