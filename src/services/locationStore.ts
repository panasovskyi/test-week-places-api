import type { LocationState, Listener } from "../types/store";
import { createObserver } from './createObserver';

export const locationStore = createObserver<LocationState>();
