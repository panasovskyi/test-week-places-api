import { apiFoursquare } from "./instance";
import type { Place, FoursquareSearchResponse } from "../../types/place";
import type { GetPlacesOptions } from "../../types/getPlacesOptions";

class FoursquareService {
  async getPlaces(
    lat: string,
    lng: string,
    options: GetPlacesOptions = {},
  ): Promise<Place[]> {
    const res = await apiFoursquare.get<FoursquareSearchResponse>(
      "places/search",
      {
        params: {
          ll: `${lat},${lng}`,
          ...options,
        },
      },
    );

    return res.data.results;
  }
}

export const foursquareService = new FoursquareService();
