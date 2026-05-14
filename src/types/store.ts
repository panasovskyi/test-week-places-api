import type { Location } from "./location";

export interface LocationState {
  data: Location | null;
  error: string | null;
  loading: boolean;
}

export type Listener<T> = (state: T) => void;
