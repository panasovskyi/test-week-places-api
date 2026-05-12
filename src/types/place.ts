export type PlaceCategory = {
  fsq_category_id: string;
  name: string;
  short_name: string;
}

export type PlaceLocation = {
  address: string;
  locality: string;
  region: string;
  country: string;
  postcode: string;
}

export type Place = {
  fsq_place_id: string;
  name: string;
  latitude: number;
  longitude: number;
  distance: number;
  categories: PlaceCategory[];
  location: PlaceLocation;
  website: string;
  tel: string;
}

export type PlacesResponse = {
  candidates: Place[];
}
