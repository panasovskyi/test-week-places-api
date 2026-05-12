import { getNearbyPlaces } from './handlers/getNearbyPlaces';

const button = document.querySelector(".button");

button?.addEventListener("click", () => {
  const lat = (document.getElementById("lat") as HTMLInputElement).value;
  const lng = (document.getElementById("lng") as HTMLInputElement).value;

  getNearbyPlaces(lat, lng);
});