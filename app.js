import TelegramBot from 'node-telegram-bot-api';
import fetch from 'node-fetch';

//TelegramBot
const bot = new TelegramBot(TOKEN, { polling: true })

bot.onText(/\/start/, (msg) => {
	bot.sendMessage(msg.chat.id, "Привет!", {
	"reply_markup": {
		"keyboard": [["Мяу"], ["Создатель котиков"], ["node-telegram-bot-api", "thecatapi"]]
		}
	});
});

bot.on('message', async (msg) => {
	const response = await fetch('https://api.thecatapi.com/v1/images/search');
	const [data] = await response.json();

	var cats = "Мяу";
	if (msg.text.indexOf(cats) === 0) {
		bot.sendPhoto(msg.chat.id, data.url);
	}

	var author = "Создатель котиков";
	if (msg.text.indexOf(author) === 0) {
		bot.sendMessage(msg.chat.id, "https://t.me/mm_null");
	}

	var node_tg_bot_api = "node-telegram-bot-api";
	if (msg.text.indexOf(node_tg_bot_api) === 0) {
		bot.sendMessage(msg.chat.id, "https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md");
	}

	var thecatapi = "thecatapi";
	if (msg.text.indexOf(thecatapi) === 0) {
		bot.sendMessage(msg.chat.id, "https://thecatapi.com/");
	}
});

