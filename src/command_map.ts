import { State } from "./state.js";

export async function commandMap(state: State) {
  const locations = await state.pokeapi.fetchLocations(
    state.nextLocationsURL ?? undefined,
  );

  console.log();
  for (let loc of locations.results) {
    console.log(loc.name);
  }
  console.log();

  state.prevLocationsURL = locations.previous;
  state.nextLocationsURL = locations.next;
}
