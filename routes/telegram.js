const handleTelegramRoutes = (bot) => {
    // Start command
    bot.onText(/\/start/, (msg) => {
        const chatId = msg.chat.id;
        const username = msg.from.first_name;
        bot.sendMessage(chatId, `Welcome ${username}! 👋\nType /help to see available commands.`);
    });

    // Help command
    bot.onText(/\/help/, (msg) => {
        const chatId = msg.chat.id;
        const helpMessage = `
Available commands:
/start - Start the bot
/help - Show this help message
/time - Get current time
/echo [message] - Echo back your message`;
        
        bot.sendMessage(chatId, helpMessage);
    });

    // Time command
    bot.onText(/\/time/, (msg) => {
        const chatId = msg.chat.id;
        const currentTime = new Date().toLocaleString();
        bot.sendMessage(chatId, `Current time: ${currentTime}`);
    });

    // Echo command
    bot.onText(/\/echo (.+)/, (msg, match) => {
        const chatId = msg.chat.id;
        const resp = match[1];
        bot.sendMessage(chatId, resp);
    });

    // Handle regular messages
    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        
        // Only respond to non-command messages
        if (!msg.text.startsWith('/')) {
            bot.sendMessage(chatId, `You said: ${msg.text}`);
        }
    });
};

module.exports = handleTelegramRoutes;