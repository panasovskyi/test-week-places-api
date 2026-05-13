import { findBestLocation } from "./findBestLocation";
import { foursquareRepository } from "../repositories/foursquareRepository";
import type { Location } from "../types/location";
import type { Result } from '../types/result';

export const getBestLocation = async (
  lat: string,
  lng: string,
): Promise<Result<Location>> => {
  const places = await foursquareRepository.getPlaces(lat, lng, { limit: 50 });

  if (places.length === 0) {
    return { success: false, error: "No places found" };
  }

  const best = findBestLocation(places);

  if (!best) {
    return { success: false, error: "Unable to find a place" };
  }

  return { success: true, data: best };
};
