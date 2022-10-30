const Discord = require("discord.js");
const bot = new Discord.Client();

const config = require('./config.json');
const TOKEN = config.TOKEN;
const PREFIX = config.PREFIX;

const {SLED} = require('./index.js');

bot.on('ready', ()=>{
    console.log('El bot esta ready!' + SLED);
});

bot.on('message', (msg)=>{
    if(!msg.content.startWith(PREFIX)) return;
    if(msg.author.bot) return;


    if(msg.content.startWith(PREFIX + 'on')){
        msg.channel.send('ON')
    }

    if(msg.content.startWith(PREFIX + 'off')){
        msg.channel.send('OFF')
    }
});

bot.login();