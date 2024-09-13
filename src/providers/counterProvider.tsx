import { ReactElement, useEffect, useState } from "react";
import { CounterContext, INITIAL_STATE } from "../contexts/counterContext";

const INTERVAL_MS = 1000;

let intervalName: number;
export function CounterContextProvider({
    children,
}: {
    children: ReactElement;
}) {
    const [state, setState] = useState<{ counter: number }>(INITIAL_STATE);

    useEffect(() => {
        intervalName = setInterval(() => {
            setState((state) => ({ ...state, counter: state.counter + 1 }));
        }, INTERVAL_MS);

        return () => clearInterval(intervalName);
    }, []);

    return (
        <CounterContext.Provider value={state}>
            {children}
        </CounterContext.Provider>
    );
}
