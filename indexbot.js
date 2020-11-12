const { request } = require("http");
//connect mongoose
const mongoose = require('mongoose')
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

//start mongoose
mongoose.connect(helper.DB_URL, {
    useNewUrlParser: true 
})
//end

//test database
.then(() => console.log('MonggoDB started'))
.catch((err) => console.log('err'))
//end

// bot settings
const bot = new telegramBot(TOKEN, {
    polling: true
                                    }
                            );

// html markdown 
bot.on('message', function (msg)                                      {

    const chatId = helper.getChatId(msg);
    const html = '<strong>📌Manzil:</strong> <pre>Xorazm viloyati,Hazprasp tumani markazi, Univermark roparasi 2-qavat.</pre>' +
    '<strong>☎️Nomer: </strong> <pre>+998956200202.</pre>' + 
    '<strong>🌏Sayt: </strong> <pre>www.grandstyle.uz</pre> ' +
    '<strong>📌Instagram: </strong><pre>@grand_style</pre> ' +
    '<strong>🤖Telegram-bot:</strong> @grandstyle_bot' +
    '<strong>👨‍⚖️Dasturchi: </strong> Furqat +998941143232';
//end 

//online navbat button #1
switch (msg.text)                                                    {
    case kb.home.navbat:
        bot.sendMessage(chatId, 'Ustani tanlang',                    {
            reply_markup:                                                {
                keyboard: keyboard.ustatanlash
                                                                          }
                                                                      }
                        );
    break; 
//end 

//savollar takliflar button #2
    case kb.home.savollar:
        bot.sendMessage(chatId, 'Bu yerga (takliflar,savollar,shikoyatlar) bolsa yozib qoldiring', {
            reply_markup: {
                keyboard: keyboard.savollar
                           },
                                                                                                     },
                        );
    break;
//end
    
// aloqa adress button #3
    case kb.home.contact:
        bot.sendMessage(chatId, html, {
            parse_mode: 'HTML'
                                       }
                        )
    break;
//end

//orqaga to the back button
    case kb.ustatanlash.orqaga:
        bot.sendMessage(chatId, "Yena na hizmat og'a", {
            reply_markup: {
                 keyboard: keyboard.home
                           }
                                                         }
                        );
    break; 
//end

//selecting bobur button
    case kb.ustatanlash.bobur:
        bot.sendMessage(chatId, 'Hizmatni tanlang', {
            reply_markup: {
                keyboard: keyboard.hizmat
                           }
                                                      }
                        );
    break;
//end

//to the back from services to selecting barber
    case kb.hizmatlar.orqaga:
        bot.sendMessage(chatId, "Yena na hizmat og'a", {
            reply_markup: {
                keyboard: keyboard.ustatanlash
                           }
                                                        }
                        );
    break; 
//end

//hizmtalarni tanlash =====================================================
//selecting date
    case kb.hizmatlar.hizmat1:
        bot.sendMessage(chatId, 'Ova aytavaring yazib duribman', {
            reply_markup: {
                keyboard: keyboard.hizmat
                           }
                                                           }
                        );
    break;
//end

//selecting date
case kb.hizmatlar.hizmat2:
    bot.sendMessage(chatId, 'Ova aytavaring yazib duribman', {
        reply_markup: {
            keyboard: keyboard.hizmat
                       }
                                                       }
                    );
break;
//end

//selecting date
case kb.hizmatlar.hizmat3:
    bot.sendMessage(chatId, 'Ova aytavaring yazib duribman', {
        reply_markup: {
            keyboard: keyboard.hizmat
                       }
                                                       }
                    );
break;
//end

//selecting date
case kb.hizmatlar.hizmat4:
    bot.sendMessage(chatId, 'Ova aytavaring yazib duribman', {
        reply_markup: {
            keyboard: keyboard.hizmat
                       }
                                                       }
                    );
break;
//end

//selecting date
case kb.hizmatlar.hizmat5:
    bot.sendMessage(chatId, 'Ova aytavaring yazib duribman', {
        reply_markup: {
            keyboard: keyboard.hizmat
                       }
                                                       }
                    );
break;
//end

/*
//selecting time
case kb.hizmatlar.enough:
    bot.sendMessage(chatId, 'Asa qaysi guni galasiz', {
        reply_markup: {
            inline_keyboard: keyboard.inlinekeyboard
                       }
                                                        }
                    );
break;
*/
//end
//end hizmat tanlsh ===========================

                                                                        } //end of switch
                                                                        }  // end of on.message function
                                                                        ); // end of bot listening

//on /start                                                                         
bot.onText(/\/start/, msg => { 

    const chatId = helper.getChatId(msg);
    const text = `Assalomu akeykum, ${msg.from.first_name} og'a bizadan na hizmat`

bot.sendMessage(helper.getChatId(msg), text, {
    reply_markup: {
        keyboard: keyboard.home
                   }
                                              }
                )
                                }
            );
//end
    
   