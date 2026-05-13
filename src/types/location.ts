export interface Location {
  name: string;
  distance: number;
  isOpen: boolean;
  minutesUntilClose: number | null;
  rating: number;
  popularity: number;
  totalReviews: number;
  isClosed: boolean;
}
