import type { LocationHours } from "../../types/location";
import { getMinutesUntilClose } from "./getMinutesUntilClose";

export const getRatingFactor = (rating: number, maxRating: number) =>
  rating / maxRating;

export const getPopularityFactor = (popularity: number) =>
  Math.min(popularity, 1);

export const getReviewsFactor = (totalRatings: number, totalTips: number) =>
  Math.min(1, (totalRatings + totalTips) / 100);

export const getDistanceFactor = (distance: number): number =>
  Math.exp(-distance / 30);

export const getTimeFactor = (
  hours: LocationHours | undefined,
  isOpen: boolean,
): number => {
  if (!isOpen) return 0;

  const minutesUntilClose = getMinutesUntilClose(hours);

  if (minutesUntilClose === null) return 0.5;
  if (minutesUntilClose < 30) return 0.2;
  if (minutesUntilClose < 60) return 0.6;

  return 1;
};
