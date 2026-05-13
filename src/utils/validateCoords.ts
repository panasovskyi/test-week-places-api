export const validateCoords = (lat: string, lng: string) => {
  if (lat === "" && lng === "") {
    return true;
  }

  const coordRegex = /^-?\d+(\.\d+)?$/;

  if (!coordRegex.test(lat) || !coordRegex.test(lng)) {
    return false;
  }

  const latNumber = parseFloat(lat);
  const lngNumber = parseFloat(lng);

  return (
    latNumber >= -90 && latNumber <= 90 && lngNumber >= -180 && lngNumber <= 180
  );
};
