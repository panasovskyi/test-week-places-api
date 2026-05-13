import type { Location } from '../types/location';

const WEIGHTS = {
  DISTANCE: 0.65,
  OPEN_STATUS: 0.1,
  TIME_UNTIL_CLOSE: 0.09,
  POPULARITY: 0.06,
  RATING: 0.06,
  SOCIAL_PROOF: 0.04,
};

const getTimeFactor = (minutesUntilClose: number | null): number => {
  if (minutesUntilClose === null) return 0.5;
  if (minutesUntilClose < 30) return 0.2;
  if (minutesUntilClose < 60) return 0.6;
  return 1;
};

const getDistFactor = (distance: number): number => Math.exp(-distance / 30);

const getSocialProof = (totalReviews: number): number =>
  Math.min(totalReviews / 1000, 1);

export const calculateScore = (place: Location): number => {
  const timeFactor = getTimeFactor(place.minutesUntilClose);
  const distFactor = getDistFactor(place.distance);
  const openFactor = place.isOpen ? 1 : 0;
  const socialProof = getSocialProof(place.totalReviews);

  return (
    socialProof * WEIGHTS.SOCIAL_PROOF +
    timeFactor * WEIGHTS.TIME_UNTIL_CLOSE +
    distFactor * WEIGHTS.DISTANCE +
    openFactor * WEIGHTS.OPEN_STATUS +
    place.popularity * WEIGHTS.POPULARITY +
    (place.rating / 10) * WEIGHTS.RATING
  );
};
