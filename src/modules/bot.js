const { Telegraf } = require("telegraf");

const bot = new Telegraf("1480789858:AAFWx0uldWNRuBocrhJab6tmWoiTk1uBpwo");

bot.start((ctx) => ctx.reply('Welcome!'));

bot.help((ctx) => ctx.reply('Send me a sticker'));

bot.on('sticker', (ctx) => ctx.reply('👍'));

bot.hears('hi', (ctx) => ctx.reply('Hey there'));

module.exports = bot;
