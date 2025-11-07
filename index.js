import { Telegraf } from "telegraf";
import "dotenv/config";
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(`Привет ${ctx.from.first_name}! Добро пожаловать!`);
});

bot.help((ctx) => {
  ctx.reply(
    `Привет, ${ctx.from.first_name}! Я тестовый бот. Вот что я умею:\n\n/start - Начать взаимодействие\n/help - Показать этот список команд`
  );
});

bot.on("text", (ctx) => {
  ctx.reply(`Вы сказали ${ctx.message.text}`);
});

bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

console.log("Бот запущен и готов к работе!");
