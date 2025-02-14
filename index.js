const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

// Initialize the bot
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {polling: true});

// Import routes
const telegramRoutes = require('./routes/telegram');

// Initialize routes
telegramRoutes(bot);

// Error handling
bot.on('polling_error', (error) => {
    console.error('Bot polling error:', error);
});

console.log('Telegram bot is running...');