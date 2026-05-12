import axios from 'axios';

import { placesService } from "../services/places.service";
import { renderPlace } from '../ui/renderPlace';

export const getNearbyPlaces = async (lat: string, lng: string) => {
  try {
    const places = await placesService.get(lat, lng);

    if (!places) {
      return;
    };

    const first = [...places].sort((a, b) => a.distance - b.distance)[0];
    
    if (first) {
      renderPlace(first);
    }

    return places;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.status);
      console.log(error.message);
    }
  }
};
