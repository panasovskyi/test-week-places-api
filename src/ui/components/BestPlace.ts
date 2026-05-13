import type { Place } from "../../types/place";

export const BestPlace = (place: Place | null) => {
  if (!place) {
    return `<p>Nothing found. Try different coordinates.</p>`;
  }

  const categories = place.categories.map((c) => c.name).join(", ");

  return `
    <div>
      <hr>
      <h2>Found: ${place.name}</h2>
      <p><strong>Categories:</strong> ${categories}</p>
      <p><strong>Distance:</strong> ${place.distance}м</p>
      <p><strong>Address:</strong> ${place.location.formatted_address}</p>
    </div>
  `;
};
