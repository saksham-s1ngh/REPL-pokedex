export function cleanInput(input: string): string[] {
  // logic goes here
  let cleaned = input.trim().toLowerCase().split(" ");
  return cleaned;
}
