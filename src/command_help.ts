import type { CLICommand } from "./command.ts";

export function commandHelp(commands: Record<string, CLICommand>) {
  console.log(`Welcome to the Pokedex!\nUsage:\n`);
  for (let command in commands) {
    console.log(`${command}: ${commands[command].description}`);
  }
}
