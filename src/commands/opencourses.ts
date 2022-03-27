import { Interaction } from "discord.js";
import InteractionManager from "../utils/interactionManager";
import fetch from "node-fetch";
import moment from "moment";

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
              "Authorization": "Bearer " + process.env.ACCESS_TOKEN
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
