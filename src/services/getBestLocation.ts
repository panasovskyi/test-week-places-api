import type { Location } from "../types/location";
import type { Result } from "../types/result";
import { foursquareRepository } from "../api/foursquare/repo";
import { findBestLocation } from "../domain/findBestLocation";

/*
getOptimalLocation 
getOptimalPlace
getCurrentLocation ---
getCurrentPlace
getLocation
getPlace 
*/

export const getBestLocation = async (
  lat: string,
  lng: string,
): Promise<Result<Location>> => {
  try {
    const places = await foursquareRepository.getPlaces(lat, lng);

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
