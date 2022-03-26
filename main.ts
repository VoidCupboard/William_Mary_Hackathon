import { Client , Intents, Message } from "discord.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
})

const client = new Client({
    intents: [Intents.FLAGS.GUILD_MESSAGES]
});

client.on("ready" , () => {
    console.log("I am up and running")
})

client.on("messageCreate" , (msg: Message) => {
    msg.reply("Hi I am up and running");
})

console.log(process.env.TOKEN)

client.login(process.env.TOKEN)
