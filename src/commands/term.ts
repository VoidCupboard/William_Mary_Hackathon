import { Interaction } from "discord.js";
import InteractionManager from "../utils/interactionManager";
import fetch from "node-fetch";
import moment from "moment";

interface Courses {
    TERM_CODE: string
    TERM_DESC: string
    TERM_END_DATE: string
}

interface Response {
    title: Array<string>
    endsIn: Array<string>
}

export default class Terms {
  constructor(interactionManager: InteractionManager) {
    interactionManager.registerSlashCommand({
        name: "activeterms",
        description: "Sends all the active terms"
    } , this.onInteractionCreate)
  }

  formatTerms = (terms: Array<Courses> , timestamp: number) => {
    const time = moment(new Date(timestamp).toISOString());
    const response: Response = {title: [] , endsIn: []}
    for(let term of terms) {
      response["title"].push(`${term.TERM_DESC} (${term.TERM_CODE})`)
      response["endsIn"].push(moment(term.TERM_END_DATE).utcOffset(time.utcOffset()).from(time))
    }
    return {
      "title": response.title.join("\n"),
      "endsIn": response.endsIn.join("\n")
    }
  }

  onInteractionCreate = async (interaction: Interaction) => {
      if(!interaction.isCommand()) return

      await interaction.deferReply();

      const res = await fetch("https://openapi.it.wm.edu/courses/production/v1/activeterms" , {
          headers: {
              "Authorization": "Bearer " + process.env.ACCESS_TOKEN
          }
      })

      const json = await res.json()

      const formattedTerms = this.formatTerms(json , interaction.createdTimestamp);

      interaction.editReply(
        {
          embeds: [
            {
              color: "#88C0D0",
              title: "Active terms",
              fields: [
                {
                  name: "Title",
                  value: formattedTerms["title"],
                  inline: true
                },
                {
                  name: "Ends In",
                  value: formattedTerms["endsIn"],
                  inline: true
                }
              ]
            }
          ]
        }
      );
  }
}
