import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";

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
      // callbacks are not a 'State' or a 'CLICommand',
      //  It's a function that accepts a 'State' and returns nothing.
    },
    // can add more commands here
  };
}
