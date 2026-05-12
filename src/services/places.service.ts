import { api } from '../api'
import type { Place, PlacesResponse } from '../types/place';

export const placesService = {
  async get(lat: string, lng: string): Promise<Place[]> {
    const res = await api.get<PlacesResponse>("geotagging/candidates", {
      params: {
        ll: `${lat},${lng}`,
        limit: 50,
      },
    });

    return res.data.candidates;
  }
}