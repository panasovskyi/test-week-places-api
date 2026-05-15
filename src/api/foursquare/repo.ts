import { foursquareService } from ".";
import type { GetPlacesParams } from "../../types/params.foursquare";
import type { Location } from "../../types/location";
import type { Coords } from "../../types/coords";
import { mapToLocation } from "./mapper";

export const foursquareRepository = {
  async getPlaces(coords: Coords): Promise<Location[]> {
    const params: GetPlacesParams = {
      ll: `${coords.lat},${coords.lng}`,
      limit: 10,
    };

    const places = await foursquareService.getPlaces(params);

    return places.map(mapToLocation);
  },
};
