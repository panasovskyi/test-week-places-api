export interface Location {
  name: string;
  distance: number;
  isPermanentlyClosed: boolean;
  dateClosed: string | null;
  hours?: LocationHours;

  rating: number;
  maxRating: number;
totalRatings: number;
  totalTips: number;
  popularity: number;
}

export interface LocationRegularHours {
  day: number;
  open: string;
  close: string;
  isOvernight?: boolean;
}

export interface LocationHours {
  isOpenNow: boolean;
  regular: LocationRegularHours[];
  displayText?: string;
}