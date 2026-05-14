import { Location } from './location';

export type Factor = {
  weight: number;
  getValue: (place: Location) => number;
};