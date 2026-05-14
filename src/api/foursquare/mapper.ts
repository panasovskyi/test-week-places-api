import { Location, LocationHours } from "../../types/location";
import { FoursquareHours, FoursquarePlace } from "../../types/place.foursquare";

//#region HOURS
const mapFoursquareHours = (hours: FoursquareHours): LocationHours => ({
  isOpenNow: hours.open_now,
  regular: hours.regular.map((r) => ({
    day: r.day,
    open: r.open,
    close: r.close,
    isOvernight: r.is_overnight ?? false,
  })),
  displayText: hours.display,
});
//#endregion

export const mapToLocation = (place: FoursquarePlace): Location => {
  const hours = place.hours ? mapFoursquareHours(place.hours) : undefined;

  return {
    name: place.name,
    distance: place.distance,
    dateClosed: place.date_closed || null,
    isPermanentlyClosed: !!place.date_closed,
    rating: place.rating ?? 0,
    maxRating: 10,
    totalRatings: place.stats?.total_ratings ?? 0,
    totalTips: place.stats?.total_tips ?? 0,
    popularity: place.popularity ?? 0,

    ...(hours && { hours }),
  };
};