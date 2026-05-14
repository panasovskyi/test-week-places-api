import type { Location } from "../types/location";
import { calculateScore } from "./calculateScore";

export const findBestLocation = (places: Location[]): Location | null => {
  let bestPlace: Location | null = null;
  let maxScore = -1;

  for (const place of places) {
    const score = calculateScore(place);

    if (score > maxScore) {
      maxScore = score;
      bestPlace = place;
    }
  }

  return bestPlace;
};
