import { getBestLocation } from "./getBestLocation";
import { locationStore } from "./locationStore";
import axios from "axios";

export const handleSearch = async (lat: string, lng: string) => {
  try {
    locationStore.publish({ data: null, error: null, loading: true });

    const result = await getBestLocation(lat, lng);

    if (!result.success) {
      locationStore.publish({
        data: null,
        error: result.error,
        loading: false,
      });
      return;
    }

    locationStore.publish({ data: result.data, error: null, loading: false });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      locationStore.publish({
        data: null,
        error: `${error.message}. ${error.response?.statusText}`,
        loading: false,
      });
    } else {
      const message = error instanceof Error ? error.message : "Unknown error";
      locationStore.publish({
        data: null,
        error: message,
        loading: false,
      });
    }
  }
};
