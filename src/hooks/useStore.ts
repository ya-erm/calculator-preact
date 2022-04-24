import { Store } from 'effector';
import { useState } from 'preact/hooks';

export function useStore<T>($store: Store<T>) {
  const [state, setState] = useState($store.getState());
  $store.watch((value) => {
    setState(value);
  });
  return state;
}
