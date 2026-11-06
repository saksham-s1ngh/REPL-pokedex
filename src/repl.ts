export function cleanInput(input: string): string[] {
  // logic goes here
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");
}
