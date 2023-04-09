//https://kidadl.com/quotes/best-shoresy-quotes-for-all-teen-letterkenny-fans
//https://www.lessonpaths.com/shoresy-quotes/
//https://www.shoresychirps.com


require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is ready!`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }
    if (message.content.toLowerCase() === 'hi shorsey') {
        message.reply('Hello');
    }
    if (message.content.toLowerCase() === 'fuck you shoresy') {
        var choices = [
            "Fuck you, Jonesy, your life is so pathetic I get a charity tax break just by hanging around you!",
            "Fuck you, Reilly, go scoop it off your mom’s floor! She gives my nipples butterfly kisses.",
            "Jonesy, tell your mom I drained the bank account she set up for me. Top it up so I can get some KFC.",
            "You’re made of spare parts, aren’t you, bud?",
            "Jonesy, your mom got us banned from Canada's Wonderland.",
            "I see the muscle shirt came today. Muscles coming tomorrow?",
            "Hey, you wanna talk about teamwork, Jonesy?",
            "Jonesy! Your mom just liked my Instagram post from 2 years ago in Puerto Vallarta.",
            "Your life is so pathetic, I ran a charity 15k to raise awareness for it.",
            "What’s up with your body hair big shoots, you look like a 12-year-old Dutch girl.",
            "Mary Anne. You got legs on you like redwoods. You could box-jump a bungalow.",
            "Tell your mom to leave me alone, she’s been laying on my waterbed since Labour Day.",
            "Nice work. Celly, you're the pride of your community.",
            "Make yourselves useful. Grab me a bag of dill pickles.",
            "Reilly. Tell your mum to give me a time-out.",
            "Frankie, you look like you love a good slice... If the Cup was a slice, you think you'd work a little harder, you pizza face?",
        ]
        var output = choices[Math.floor(Math.random()
            * choices.length)];

        message.reply(output)
    }

});

client.login(process.env.TOKEN);

