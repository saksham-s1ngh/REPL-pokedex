import { getCommands } from "./commands.js";
import { createInterface, type Interface } from "readline";
import { stdin, stdout } from "node:process";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  pokeapi: PokeAPI;
  nextLocationsURL: string | null;
  prevLocationsURL: string | null;
};

export function initState(): State {
  return {
    readline: createInterface({
      input: stdin,
      output: stdout,
      prompt: "Pokedex > ",
    }),
    commands: getCommands(),
    pokeapi: new PokeAPI(),
    nextLocationsURL: "",
    prevLocationsURL: "",
  };
}
