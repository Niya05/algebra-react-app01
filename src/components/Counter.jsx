import "./counter.css";
import { useState } from "react";

export function Counter(props) {
    // const [counter, setCounter] = useState(props.initialValue);               
    const counterState = useState(props.initialValue);
    const counter = counterState[0];
    const setCounter = counterState[1];

    const handleDecrease = () => {   // handle - handle event
        //setCounter(counter + 1); ++ radi mutaciju state-a bez uporabe state counter
        setCounter((state) => --state);
    }
    const handleIncrease = () => {
        setCounter((state) => ++state);
    }

    return (
        <div>
        <button className="counter" onClick={handleDecrease}>-</button>
        <span>{counter}</span>
        <button className="counter" onClick={handleIncrease}>+</button>
        </div>
    );
}