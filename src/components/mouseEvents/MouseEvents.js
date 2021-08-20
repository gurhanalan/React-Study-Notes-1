import React from "react";
import styles from "./mouseEvents.module.css";

export default function MouseEvents() {
    return (
        <div className={styles["mouse-event"]}>
            <h2>Mouse Event</h2>
            <p>X and Y</p>
            <ul className={styles.list}>
                <li id="todo-1">
                    To Do Item 1 <span>X</span>
                </li>
                <li id="todo-2">
                    To Do Item 2 <span>X</span>
                </li>
                <li id="todo-3">
                    To Do Item 3 <span>X</span>
                </li>
                <li id="todo-4">
                    To Do Item 4 <span>X</span>
                </li>
            </ul>
        </div>
    );
}
