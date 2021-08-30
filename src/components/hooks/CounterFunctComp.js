import React, { useState } from "react";
import styles from "./counterFunctComp.module.scss";

function CounterFunctComp({ name }) {
    const [counter, setCounter] = useState(0);
    return (
        <div className={styles.container}>
            <h1> Functional Comp with Hooks </h1>

            <p>Counter of {name}</p>
            <p>Counter : {counter}</p>
            <button onClick={() => setCounter(counter - 1)}>Count Down</button>
            <button onClick={() => setCounter(counter + 1)}>Count Up</button>
        </div>
    );
}

export default CounterFunctComp;
