import { ApplicationCommandDataResolvable, Client, Guild, Interaction } from "discord.js";

export default class InteractionManager {
  guild: Guild
  commands: Record<string , CallableFunction>

    constructor(guild: Guild) {
      this.guild = guild
      this.commands = {}
    }

  registerSlashCommand(config: ApplicationCommandDataResolvable , callback: CallableFunction) {
      this.guild.commands.create(config);
      this.commands[config.name] = callback
  }

  onInteractionCreate = (interaction: Interaction) => {
    if(!interaction.isCommand()) return

    try {
        this.commands[interaction.commandName](interaction)
    } catch(err) {
        console.log(err)
    }
  }
}
