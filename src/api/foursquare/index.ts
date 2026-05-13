import { apiFoursquare } from "./instance";
import type { Place, FoursquareSearchResponse } from "../../types/place";
import type { GetPlacesOptions } from "../../types/getPlacesOptions";

export const foursquareService = {
  async getPlaces(options: GetPlacesOptions = {}): Promise<Place[]> {
    const res = await apiFoursquare.get<FoursquareSearchResponse>(
      "places/search",
      {
        params: options,
      },
    );

    return res.data.results;
  },
};