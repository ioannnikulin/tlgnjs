const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '697600599:AAET3B6vHbp4BPeXGwPbhgC5YlZYyYC311U'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, `Hello, ${msg.from.first_name}`)
})