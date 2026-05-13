import type { Hours } from '../types/place';

export const getMinutesUntilClose = (hours: Hours | undefined): number | null => {
  if (!hours || !hours.open_now || !hours.regular) {
    return null;
  }

  const now = new Date();
  const currentDay = now.getDay();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const todaySchedule = hours.regular.find(h => h.day === currentDay);

  if (!todaySchedule) {
    return null;
  }

  const closeDate = new Date(todaySchedule.close);
  const closeMinutes = closeDate.getHours() * 60 + now.getMinutes();

  return closeMinutes - currentMinutes;
};