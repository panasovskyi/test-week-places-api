import { foursquareService } from '../api/foursquare';
import type { GetPlacesOptions } from '../types/getPlacesOptions';
import type { Location } from '../types/location';
import type { Place } from '../types/place';
import { getMinutesUntilClose } from '../utils/getMinutesUntilClose';

const mapToLocation = (place: Place): Location => ({
  name: place.name,
  distance: place.distance,
  isOpen: place.hours?.open_now ?? false,
  minutesUntilClose: getMinutesUntilClose(place.hours),
  rating: place.rating ?? 0,
  popularity: place.popularity ?? 0,
  totalReviews:
    (place.stats?.total_ratings ?? 0) + (place.stats?.total_tips ?? 0),
  isClosed: !!place.date_closed,
});

export const foursquareRepository = {
  async getPlaces(
    lat: string,
    lng: string,
    options?: GetPlacesOptions,
  ): Promise<Location[]> {
    const places = await foursquareService.getPlaces(lat, lng, options);
    return places.map(mapToLocation);
  },
};
