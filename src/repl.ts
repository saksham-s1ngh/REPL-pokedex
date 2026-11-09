import { getCommands } from "./commands.js";
import type { CLICommand } from "./command.js";
import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";

export function startREPL() {
  const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "Pokedex > ",
  });

  rl.prompt();

  rl.on("line", async (input) => {
    const words = cleanInput(input);
    if (words.length == 0) {
      rl.prompt();
      return;
    }

    const commandName = words[0];

    // 1. call getCommands() to get the registry object.
    const available_commands = getCommands();

    // 2. Look up the typed command name as a key in that object.
    const cmd = available_commands[commandName];
    if (!cmd) {
      // 4. If not found, print Unknown command.
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`,
      );
      rl.prompt();
      return;
    }

    // 3. If found, call its callback.
    try {
      cmd.callback(available_commands);
    } catch (e) {
      console.log(e);
    }

    rl.prompt();
  });
}

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");
}
