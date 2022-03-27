import { Interaction } from "discord.js";
import InteractionManager from "../utils/interactionManager";
import fetch from "node-fetch";
import moment from "moment";

const getToken = async () => {
  const res = await fetch("https://openapi.it.wm.edu/auth/v1/login" , {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          client_id: "tribehacks",
          secret_id: "E74euRJIhUcoJAf2nCDXDM8hE45KQPBOvuq7bkRRisKxb"
      })
  })

  const json = await res.json()

  return json.access_token
}

export default class SubjctList {
  constructor(interactionManager: InteractionManager) {
    interactionManager.registerSlashCommand({
        name: "subjectlist",
        description: "Sends all the subjects"
    } , this.onInteractionCreate)
  }

  onInteractionCreate = async (interaction: Interaction) => {
      if(!interaction.isCommand()) return

      await interaction.deferReply();

      const res = await fetch("https://openapi.it.wm.edu/courses/production/v1/activeterms" , {
          headers: {
              "Authorization": "Bearer " + await getToken()
          }
      })

    const json: Array<any> = await res.json()

   const res_ = []

    for(let subject of json) {
        console.log(subject)
        res_.push(`${subject.STVSUBJ_DESC} (${subject.STVSUBJ_CODE})`)
    }

    await interaction.editReply({
      embeds: [
        {
          title: "LMAO",
          description: res_.join("\n")
        }
      ]
    })
  }
}
