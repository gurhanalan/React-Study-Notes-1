import React from "react";
import styles from "./mouseEvents.module.css";

import { useState } from "react";

export default function MouseEvents() {
    // Hooks for states
    const [coordX, setCoordX] = useState(0);
    const [coordY, setCoordY] = useState("");

    // Mouse move function
    const handleMouseMove = (e) => {
        setCoordX(e.nativeEvent.offsetX);
        setCoordY(e.nativeEvent.offsetY);
    };

    // Click function
    const handleClick = (e) => {
        console.log({ eventType: e.type, id: e.target.id });
        console.log("eventType:" + e.type + ", id:" + e.target.id);
    };

    // Double Click Function
    const handleDoubleClick = (e, name) => {
        alert(e.target.id + ", " + name);
    };

    return (
        <div className={styles["mouse-event"]}>
            <h2>Mouse Event</h2>
            <p>X and Y</p>
            <p>
                <span>{coordX}</span> {coordY}
            </p>
            <ul className={styles.list}>
                <li id="todo-1" onMouseMove={handleMouseMove}>
                    To Do Item 1 <span>X</span>
                </li>
                <li id="todo-2" onClick={handleClick}>
                    To Do Item 2 <span>X</span>
                </li>
                <li
                    id="todo-3"
                    onDoubleClick={(e) => handleDoubleClick(e, "Alan")}
                >
                    To Do Item 3 <span>X</span>
                </li>
                <li id="todo-4">
                    To Do Item 4 <span>X</span>
                </li>
            </ul>
        </div>
    );
}
