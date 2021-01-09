// connecting framework
const telegramBot = require('node-telegram-bot-api');
const { send } = require("process");
const helper = require('./helper')
const keyboard = require('./keyboard')


//const keyboardbutton = require('./kb');
const { text } = require("body-parser");
const kb = require("./kb");
const { getChatId } = require("./helper");


// connecting Token of bot 
const TOKEN = '1325721109:AAFOWnI0JwXcehP7CoSueNRIXlf-PiTh9dU'


////////////////////////////////////////////////////////////////////////////
// Express JS

const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
app.listen(PORT, () => {
    console.log('Server has been started')
});


// Mongoose
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:<password>@cluster0.hsxbk.mongodb.net/<dbname>?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});


// bot settings
const bot = new telegramBot(TOKEN, {
    polling: true
});

const manzil = `
<b>📌Manzil: </b> Kavkaz kafedan keyingi bino. <a></a>
<b>📞Tel: </b> +998941170202 <a></a> 
<b>💻👨Dasturchi: </b> @furqatl
`



bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === kb.home.navbat) {
        bot.sendMessage(chatId, "Ustani tanlang", {
            reply_markup: {
                keyboard: keyboard.ustatanlash
            }
        });

    } else if (text === '/start') {
        bot.sendMessage(chatId, 'Hizmatni tanlang!', {
            reply_markup: {
                keyboard: keyboard.home
            }
        });

    } else if (text === kb.ustatanlash.orqaga) {
        bot.sendMessage(chatId, 'Hizmatni tanlang!', {
            reply_markup: {
                keyboard: keyboard.home
            }
        });

    } else if (text === kb.home.savollar) {
        bot.sendMessage(chatId, "Bu yerga savol,taklif,shikoyatkaringiz bolsa yozib qoldiring", {
            reply_markup: {
                keyboard: keyboard.savollar
            }
        });

    } else if (text === kb.home.contact) {
        bot.sendLocation(chatId, 41.313424, 61.089112, );
        bot.sendMessage(chatId, manzil, {
            parse_mode: "HTML",
        });

    } else if (text === kb.ustatanlash.bobur) {
        bot.sendMessage(chatId, 'Boshlaymiz', {
            reply_markup: {
                keyboard: keyboard.hizmat
            }
        })
    }



})