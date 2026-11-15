import { State } from "./state.js";

export async function commandMapB(state: State) {
  if (state.prevLocationsURL) {
    const locations = await state.pokeapi.fetchLocations(
      state.prevLocationsURL,
    );

    console.log();
    for (let loc of locations.results) {
      console.log(loc.name);
    }
    console.log();

    state.prevLocationsURL = locations.previous;
    state.nextLocationsURL = locations.next;
  } else {
    console.log();
    console.log("you're on the first page");
    console.log();
  }
}
