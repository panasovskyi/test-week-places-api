import type { Location } from "../types/location";
import type { Result } from "../types/result";
import type { Coords } from "../types/coords";
import { foursquareRepository } from "../api/foursquare/repo";
import { findBestLocation } from "../domain/findBestLocation";

/*
getOptimalLocation 
getOptimalPlace
getLocation / ByCoords
getPlace / ByCoords
*/

export const getBestLocation = async (
  coords: Coords,
): Promise<Result<Location>> => {
  try {
    const places = await foursquareRepository.getPlaces(coords);

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
