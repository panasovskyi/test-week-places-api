import { Location } from "../types/location";

export const searchView = (rootId: string = "root") => {
  const root = document.getElementById(rootId)!;

  root.innerHTML = `
    <section>
      <div>
        <input type="text" id="lat" placeholder="Latitude (e.g. 50.45)">
        <input type="text" id="lng" placeholder="Longitude (e.g. 30.51)">
        <button id="search-btn">Find Place</button>
      </div>
      <div id="output"></div>
    </section>
  `;

  const output = root.querySelector("#output") as HTMLDivElement;
  const latInput = root.querySelector("#lat") as HTMLInputElement;
  const lngInput = root.querySelector("#lng") as HTMLInputElement;
  const btn = root.querySelector("#search-btn") as HTMLButtonElement;

  return {
    getInputs: () => ({ lat: latInput.value, lng: lngInput.value }),
    onSearch: (handler: () => void) => btn.addEventListener("click", handler),
    showLoader: () => {
      output.innerHTML = '<div>Searching...</div>';
    },
    showError: (message: string) => {
      output.innerHTML = `<div>${message}</div>`;
    },
    showPlace: (place: Location) => {
      output.innerHTML = `
      <div>
        <h2>${place.name}</h2>
        <p>Distance: ${place.distance} meters</p>
      </div>
    `;
    },
  };
};
