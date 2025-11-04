import { useDebugValue, useSyncExternalStore } from "react";

type PartialState<T> = T | Partial<T> | ((state: T) => T | Partial<T>);
type SetState<T> = (partial: PartialState<T>, replace?: boolean) => void;
type GetState<T> = () => T;
type Subscriber<T> = (state: T) => void;
type StateCreator<T> = (set: SetState<T>, get: GetState<T>) => T;
type Selector<T, Slice> = (state: T) => Slice;
type EqualityChecker<Slice> = (a: Slice, b: Slice) => boolean;

type StoreApi<T> = {
  setState: SetState<T>;
  getState: GetState<T>;
  subscribe: (listener: Subscriber<T>) => () => void;
};

type UseStore<T> = {
  <Slice = T>(selector?: Selector<T, Slice>, equalityFn?: EqualityChecker<Slice>): Slice;
} & StoreApi<T>;

const identity = <T>(value: T) => value;

export function create<TState>(createState: StateCreator<TState>): UseStore<TState> {
  let state = {} as TState;
  const listeners = new Set<Subscriber<TState>>();

  const setState: SetState<TState> = (partial, replace) => {
    const partialState =
      typeof partial === "function"
        ? (partial as (state: TState) => TState | Partial<TState>)(state)
        : partial;

    if (partialState === undefined) {
      return;
    }

    const nextState = replace ? (partialState as TState) : { ...state, ...(partialState as Partial<TState>) };

    if (Object.is(nextState, state)) {
      return;
    }

    state = nextState;

    listeners.forEach((listener) => listener(state));
  };

  const getState: GetState<TState> = () => state;

  const subscribe: StoreApi<TState>["subscribe"] = (listener) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  };

  state = createState((partial, replace) => setState(partial, replace), getState);

  const useStore = (<Slice = TState>(
    selector: Selector<TState, Slice> = identity as Selector<TState, Slice>,
    equalityFn: EqualityChecker<Slice> = Object.is,
  ) => {
    const slice = useSyncExternalStore(
      (notify) => {
        let currentSlice = selector(state);
        const unsubscribe = subscribe((nextState) => {
          const nextSlice = selector(nextState);
          if (!equalityFn(currentSlice, nextSlice)) {
            currentSlice = nextSlice;
            notify();
          }
        });
        return unsubscribe;
      },
      () => selector(state),
      () => selector(state),
    );

    useDebugValue(slice);

    return slice;
  }) as UseStore<TState>;

  useStore.setState = setState;
  useStore.getState = getState;
  useStore.subscribe = subscribe;

  return useStore;
}
