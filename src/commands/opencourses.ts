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

export default class OpenCourses {
  constructor(interactionManager: InteractionManager) {
    interactionManager.registerSlashCommand({
        name: "opencourses",
      description: "Sends all the courses available according to the subject and the term",
      options: [
        {
          name: "subject",
          type: "STRING",
          required: true,
          description: "The id of the subject (Can be known by the string in the brackets on running /subjects)"
        },
        {
          name: "term",
          type: "STRING",
          required: true,
          description: "The id of the term (Can be known by the string in the brackets on running /activeterms)"
        }
      ]
    } , this.onInteractionCreate)
  }

  onInteractionCreate = async (interaction: Interaction) => {
      if(!interaction.isCommand()) return

      await interaction.deferReply();

      const res = await fetch(`https://openapi.it.wm.edu/courses/production/v1/opencourses/${interaction.options.getString("subject")}/${interaction.options.getString("term")}` , {
          headers: {
              "Authorization": "Bearer " + await getToken()
          }
      })

      const json = await res.json()

    await interaction.editReply({
      embeds: [{
        title: "Here are some open courses for the term " + interaction.options.getString("term") + " and the subject " +  interaction.options.getString("subject"),
        color: "#88C0D0",
        description: `Title: ${json[0].TITLE}\n\nSeats available: ${json[0].SEATS_AVAIL}\n\nOpen/Closed: ${json[0].OPEN_CLOSED}\n\nInstructor: ${json[0].INSTRUCTOR}\n\nDaytime: ${json[0].CRS_DAYTIME}`
      }]
    })
  }
}
