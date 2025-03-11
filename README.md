# Telegram Bot NodeJS

A simple Telegram bot built with Node.js using the node-telegram-bot-api package.

## Description

This project implements a Telegram bot using Node.js. It uses environment variables for configuration and has a structured route system for organizing bot commands and features.

## Installation

1. Clone the repository:
```
git clone https://github.com/botharbour/telegram-bot-nodejs.git
cd telegram-bot-nodejs
```

2. Install dependencies:
```
npm install
```

3. Create a `.env` file in the root directory with your Telegram bot token:
```
TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
```

## Usage

### Development mode
```
npm run dev
```

### Production mode
```
npm start
```

## Project Structure

```
├── node_modules
├── routes
│   └── telegram.js
├── .gitignore
├── index.js
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

## Dependencies

- dotenv: For loading environment variables
- node-telegram-bot-api: For interacting with the Telegram Bot API
- nodemon (dev): For automatically restarting the server during development

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.