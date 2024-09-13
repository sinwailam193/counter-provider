import { useContext } from "react";

import { CounterContext } from "../contexts/counterContext";

export default function Children() {
    const counter = useContext(CounterContext)!;

    return <div>{counter.counter}</div>;
}
