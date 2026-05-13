import type { Listener } from '../types/store'

export const createObserver = <T>() => {
  const listeners: Listener<T>[] = [];

  return {
    subscribe(fn: Listener<T>) {
      listeners.push(fn);

      return () => {
        const index = listeners.indexOf(fn);

        if (index > -1) {
          listeners.splice(index, 1);
        };
      };
    },

    publish(state: T) {
      listeners.forEach(fn => fn(state));
    },
  };
};
