import { getBestLocation } from "./getBestLocation";
import { locationStore } from "./locationStore";

export const handleSearch = async (lat: string, lng: string) => {
  locationStore.publish({
    data: null,
    error: null,
    loading: true,
  });

  const result = await getBestLocation(lat, lng);

  if (!result.success) {
    locationStore.publish({
      data: null,
      error: result.error,
      loading: false,
    });

    return;
  }

  locationStore.publish({
    data: result.data,
    error: null,
    loading: false,
  });
};
