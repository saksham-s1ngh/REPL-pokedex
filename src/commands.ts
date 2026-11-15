import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapB } from "./command_mapb.js";

import type { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exit the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description:
        "Displays the names of 20 location areas in the Pokemon world, prints the next 20 on re-running the command.",
      callback: commandMap,
    },
    mapb: {
      name: "map",
      description:
        "Displays the names of previous 20 location areas in the Pokemon world",
      callback: commandMapB,
    },
    // can add more commands here
  };
}
