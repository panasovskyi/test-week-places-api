import type { Place } from "../types/place";

export const renderPlace = (place: Place) => {
  const element = document.getElementById("place");

  if (element) {
    element.innerHTML = `
    <div>
      ${place.name} - ${place.distance}m
    </div>
    `;
  }
};
