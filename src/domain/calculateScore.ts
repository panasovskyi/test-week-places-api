import { Factor } from '../types/factor';
import type { Location } from "../types/location";
import { WEIGHTS } from "./scoring/constants";
import {
  getDistanceFactor,
  getPopularityFactor,
  getRatingFactor,
  getReviewsFactor,
  getTimeFactor,
} from "./scoring/factors";

const factors: Factor[] = [
  {
    weight: WEIGHTS.TIME_UNTIL_CLOSE,
    getValue: (place) => getTimeFactor(place.hours, place.hours?.isOpenNow ?? true),
  },
  {
    weight: WEIGHTS.DISTANCE,
    getValue: (place) => getDistanceFactor(place.distance),
  },
  {
    weight: WEIGHTS.SOCIAL_PROOF,
    getValue: (place) => getReviewsFactor(place.totalRatings, place.totalTips),
  },
  {
    weight: WEIGHTS.POPULARITY,
    getValue: (place) => getPopularityFactor(place.popularity),
  },
  {
    weight: WEIGHTS.RATING,
    getValue: (place) => getRatingFactor(place.rating, place.maxRating),
  },
];

export const calculateScore = (place: Location): number => {
  if (place.isPermanentlyClosed) return 0;

  return factors.reduce(
    (score, factor) => score + factor.getValue(place) * factor.weight,
    0,
  );
};
