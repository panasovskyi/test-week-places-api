import type { Location } from './location';
import type { Place } from './place';

export interface LocationState {
  data: Location | null;
  error: string | null;
  loading: boolean;
}

export type Listener<T> = (state: T) => void;
