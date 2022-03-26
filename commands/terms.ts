import { Interaction } from "discord.js";
import InteractionManager from "../utils/interactionManager";
import fetch from "node-fetch";

export default class Terms {
  constructor(interactionManager: InteractionManager) {
    interactionManager.registerSlashCommand({
        name: "activeterms",
        description: "Sends all the active terms"
    } , this.onInteractionCreate)
  }

  onInteractionCreate = async (interaction: Interaction) => {
      if(!interaction.isCommand()) return

      await interaction.deferReply();

      interaction.editReply("LMAO")
  }
}
