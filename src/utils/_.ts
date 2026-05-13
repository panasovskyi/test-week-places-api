import type { Place } from '../types/place';
import { getDistancePythagor } from './__';

export const findClosestPlace = (places: Place[], currentLat: number,
currentLng: number) => {
  if (places.length === 0) {
    return null;
  };

  let res = places[0];

  console.log(currentLat, currentLng, res!.latitude, res!.longitude);

  let minDistance = getDistancePythagor(currentLat, currentLng, res!.latitude, res!.longitude)

  for (let i = 1; i < places.length; i++) {
    const distance = getDistancePythagor(currentLat, currentLng, places[i]!.latitude, places[i]!.longitude);

    if (distance < minDistance) {
      minDistance = distance;
      res = places[i];
    }
  }

  return res;
}