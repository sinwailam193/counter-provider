import { createContext } from "react";

interface CounterState {
    counter: number;
}

export const INITIAL_STATE: CounterState = {
    counter: 0,
};

export const CounterContext = createContext<CounterState | null>(null);
