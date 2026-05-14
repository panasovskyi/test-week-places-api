import { LocationHours } from '../../types/location';

//#region PARSE MINUTES
const parseMinutes = (time: string): number => {
  const [h, m] = time.split(":");

  if (h === undefined || m === undefined) {
    return NaN;
  }

  return Number(h) * 60 + Number(m);
};
//#endregion

export const getMinutesUntilClose = (
  hours: LocationHours | undefined,
): number | null => {
  if (!hours || !hours.regular) {
    return null;
  }

  const now = new Date();
  const currentDay = now.getDay();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const today = hours.regular.find((h) => h.day === currentDay);

  if (!today) {
    return null;
  };

  const openMinutes = parseMinutes(today.open);
  const closeMinutes = parseMinutes(today.close);

  if (Number.isNaN(openMinutes) || Number.isNaN(closeMinutes)) {
    return null;
  }

  if (closeMinutes < openMinutes) {
    return 24 * 60 - currentMinutes + closeMinutes;
  }

  return closeMinutes - currentMinutes;
};
