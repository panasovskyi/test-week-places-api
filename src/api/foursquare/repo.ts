import { foursquareService } from ".";
import type { GetPlacesParams } from "../../types/params.foursquare";
import type { Location } from "../../types/location";
import { mapToLocation } from "./mapper";

export const foursquareRepository = {
  async getPlaces(lat: string, lng: string): Promise<Location[]> {
    const params: GetPlacesParams = {
      ...(lat && lng ? { ll: `${lat},${lng}` } : {}),
      limit: 10,
    };

    const places = await foursquareService.getPlaces(params);

    return places.map(mapToLocation);
  },
};