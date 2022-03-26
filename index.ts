import { Client , Intents, Message } from "discord.js";
import dotenv from "dotenv";
import fs from "fs";
import InteractionManager from "./utils/interactionManager";

dotenv.config({
    path: "./.env"
})

const client = new Client({
    intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS]
});

client.on("ready" , async () => {
  const guild = await client.guilds.fetch("952505983895216128")

  const interactionManager = new InteractionManager(guild)

  client.on("interactionCreate" , interactionManager.onInteractionCreate)

  fs.readdir("./commands" , async (err , data: Array<String>) => {
        for(let file of data) {
          const command = (await import("./commands/" + file)).default

          new command(interactionManager);
        }
    })
})

client.on("message" , (msg: Message) => {
    msg.reply("Hi I am up and running");
})

client.login(process.env.TOKEN)
