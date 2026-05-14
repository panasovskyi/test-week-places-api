import { Coords } from '../types/coords';
import { Result } from '../types/result';

export const validateCoords = (lat: string, lng: string): Result<Coords> => {
  if (lat === "" || lng === "") {
    return { success: false, error: "Fields cannot be empty." };
  }

  const coordRegex = /^-?\d+(\.\d+)?$/;

  if (!coordRegex.test(lat) || !coordRegex.test(lng)) {
    return { success: false, error: "Only numbers are allowed." };
  }

  const latNumber = parseFloat(lat);
  const lngNumber = parseFloat(lng);

  if (latNumber < -90 || latNumber > 90) {
    return { success: false, error: "Latitude must be between -90 and 90." };
  }

  if (lngNumber < -180 || lngNumber > 180) {
    return { success: false, error: "Longitude must be between -180 and 180." };
  }

  return { success: true, data: { lat, lng } };
};