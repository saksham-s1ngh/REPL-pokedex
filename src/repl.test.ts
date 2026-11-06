import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest";

describe.each([
  {
    input: "  hello world  ",
    expected: ["hello", "world"],
  },
  // TODO: more test cases here
  {
    input: "  Charmander Bulbasaur PIKACHU",
    expected: ["charmander", "bulbasaur", "pikachu"],
  },
  {
    input: "RayQuaza gRoVylE MaCHAMp    ",
    expected: ["rayquaza", "grovyle", "machamp"],
  },
  {
    input: "polYWRatH TOXRICIty     ",
    expected: ["polywrath", "toxricity"],
  },
])("cleanInput($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    // TODO: call cleanInput with the input here
    let actual = cleanInput(input);
    // The `expect` and `toHaveLength` functions are from vitest
    // they will fail the test if the conditions are not met
    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
});
