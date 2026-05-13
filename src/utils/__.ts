export const getDistancePythagor = (
  currentLat: number,
  currentLng: number,
  placeLat: number,
  placeLng: number,
) => {
  const midLat = (currentLat + placeLat) / 2;
  const kX = Math.cos((midLat * Math.PI) / 180);
  const dLat = currentLat - placeLat;
  const dLng = kX * (currentLng - placeLng);
  const distance = Math.sqrt(dLat * dLat + dLng * dLng);

  return distance;
};
