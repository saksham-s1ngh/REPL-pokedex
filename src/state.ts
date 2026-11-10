import { getCommands } from "./commands.js";
import { createInterface, type Interface } from "readline";
import { stdin, stdout } from "node:process";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
};

export function initState(): State {
  return {
    readline: createInterface({
      input: stdin,
      output: stdout,
      prompt: "Pokedex > ",
    }),
    commands: getCommands(),
  };
}
