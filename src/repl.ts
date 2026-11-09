import { getCommands } from "./commands.js";
import type { CLICommand } from "./command.js";
import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";

export function cleanInput(input: string): string[] {
  // logic goes here
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");
}

export function startREPL() {
  const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "Pokedex > ",
  });
  rl.prompt();

  // 1. call getCommands() to get the registry object.
  const available_commands = getCommands();
  rl.on("line", (input) => {
    let words = cleanInput(input);
    if (words.length == 0) {
      rl.prompt();
      // 2. Look up the typed command name as a key in that object.
    } else if (available_commands[words[0]]) {
      // 3. If found, call its callback.
      available_commands[words[0]].callback(available_commands);
      rl.prompt();
    } else {
      // 4. If not found, print Unknown command.
      console.log("Unknown command");
      rl.prompt();
    }
  });
}
