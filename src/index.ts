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

  client.user?.setStatus("idle")

  client.user?.setPresence({
      "status": "idle",
      "activities": [
          {
            name: "/help",
              type: "WATCHING"
          }
      ]
  })

  const interactionManager = new InteractionManager(guild)

  client.on("interactionCreate" , interactionManager.onInteractionCreate)

  fs.readdir("./commands" , async (err , data: Array<String>) => {
    for(let file of data) {
      console.log("./commands/" + file)
          const command = (await import("./commands/" + file))

          console.log(command)

          new command.default(interactionManager);
        }
    })
})

client.on("message" , (msg: Message) => {
    const guild = msg.guild

//     guild?.systemChannel?.send(
//         `
// Hi @everyone!
//
// Thanks for inviting me to the server :)
//
// You can get a list of commands available by sending /help.
//         `
//     )
})

client.login(process.env.TOKEN)
