import { useContext } from "react";

import { CounterContext } from "../contexts/counterContext";

export default function SecondChildren() {
    const counter = useContext(CounterContext)!;

    return <div>{counter.counter}</div>;
}
