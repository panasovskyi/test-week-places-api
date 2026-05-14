import { apiFoursquare } from "./instance";
import type {
  FoursquarePlace,
  FoursquareSearchResponse,
} from "../../types/place.foursquare";
import type { GetPlacesParams } from "../../types/params.foursquare";

export const foursquareService = {
  async getPlaces(params: GetPlacesParams = {}): Promise<FoursquarePlace[]> {
    const res = await apiFoursquare.get<FoursquareSearchResponse>(
      "places/search",
      {
        params,
      },
    );

    return res.data.results;
  },
};
