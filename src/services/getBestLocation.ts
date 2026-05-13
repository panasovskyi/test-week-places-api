import { findBestLocation } from "./findBestLocation";
import type { Location } from "../types/location";
import type { Result } from '../types/result';
import { foursquareRepository } from '../repositories/foursquareRepository';
import type { GetPlacesOptions } from '../types/getPlacesOptions';

export const getBestLocation = async (
  lat: string,
  lng: string,
): Promise<Result<Location>> => {
  try {
    const options: GetPlacesOptions = {
      ...(lat && lng ? { ll: `${lat},${lng}` } : {}),
      limit: 10,
    };

    const places = await foursquareRepository.getPlaces(options);

    if (places.length === 0) {
      return { success: false, error: "No places found" };
    }

    const best = findBestLocation(places);

    if (!best) {
      return { success: false, error: "Unable to find a place" };
    }

    return { success: true, data: best };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
