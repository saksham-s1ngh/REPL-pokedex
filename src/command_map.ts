import type { State } from "./state.js";

export async function commandMapForward(state: State) {
  const locations = await state.pokeapi.fetchLocations(
    state.nextLocationsURL ?? undefined,
  );

  state.nextLocationsURL = locations.next;
  state.prevLocationsURL = locations.previous;

  console.log();
  for (let loc of locations.results) {
    console.log(loc.name);
  }
  console.log();
}

export async function commandMapBackward(state: State) {
  if (!state.prevLocationsURL) {
    throw new Error("you're on the first page");
  }
  const locations = await state.pokeapi.fetchLocations(
    state.prevLocationsURL ?? undefined,
  );

  state.prevLocationsURL = locations.previous;
  state.nextLocationsURL = locations.next;

  console.log();
  for (let loc of locations.results) {
    console.log(loc.name);
  }
  console.log();
}
