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

  rl.on("line", (input) => {
    let words = cleanInput(input);
    if (words.length == 0) {
      rl.prompt();
    } else {
      console.log(`Your command was: ${words[0]}`);
      rl.prompt();
    }
  });
}
