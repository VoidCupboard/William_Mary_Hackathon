import { Interaction } from "discord.js";
import InteractionManager from "../utils/interactionManager";
import fetch from "node-fetch";
import moment from "moment";

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
              "Authorization": "Bearer " + process.env.ACCESS_TOKEN
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
