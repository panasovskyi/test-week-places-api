export const validateCoords = (lat: string, lng: string) => {
  const coordRegex = /^-?\d+(\.\d+)?$/;

  if (!coordRegex.test(lat) || !coordRegex.test(lng)) {
    return false;
  }

  const latNumber = parseFloat(lat);
  const lngNumber = parseFloat(lng);

  const isLatValid = latNumber >= -90 && latNumber <= 90;
  const isLngValid = lngNumber >= -180 && lngNumber <= 180;

  return isLatValid && isLngValid;
}