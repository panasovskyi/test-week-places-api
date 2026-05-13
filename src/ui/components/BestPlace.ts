import type { Location } from '../../types/location';
import type { Place } from "../../types/place";

export const BestPlace = (place: Location | null) => {
  if (!place) {
    return `<p>Nothing found. Try different coordinates.</p>`;
  }

  return `
    <div>
      <hr>
      <h2>Found: ${place.name}</h2>
      <p><strong>Distance:</strong> ${place.distance}м</p>
    </div>
  `;
};
