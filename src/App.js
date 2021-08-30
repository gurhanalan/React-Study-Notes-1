import { useState } from "react";
import ClassComponent from "./components/ClassComponent";
import TitleFunctionalComp from "./components/FunctionalComponent";
import StyleInlineCss from "./components/InlineCSS/StyleInlineCss";
import StyleSheet from "./components/regular-style/StyleSheet";
import SassyStyle from "./components/Sassy/SassyStyle";

import "./app.css";
import styles from "./app.module.css";
import ModuleBtn from "./components/moduleCss/ModuleBtn";
import EventBind from "./components/eventBinding/EventBind";
import MouseEvents from "./components/mouseEvents/MouseEvents";
import KeyboardEvents from "./components/keyboardEvents/KeyboardEvents";
import Form from "./components/form/Form";
import Counter from "./components/compLifeCycle/Counter";
import CounterFunctComp from "./components/hooks/CounterFunctComp";

function App() {
    const [showCounter1, setShowCounter1] = useState(true);

    return (
        <div>
            <ClassComponent name="Jane Doe" />
            <TitleFunctionalComp name="John Doe" />

            <StyleInlineCss />
            <StyleSheet primary={false} />
            <SassyStyle />

            <h3 className="error">General Style Error</h3>
            <h3 className={styles.success}>Module Style Success</h3>
            <h3 className={styles["success__BEM__notation--1"]}>
                Module Style Success with Bracket Notation
            </h3>

            <ModuleBtn btnClass="primary" btnName="Module" />
            <ModuleBtn btnClass="secondary" btnName="CSS" />

            <h1>Events in React</h1>
            <EventBind />

            <MouseEvents />

            <KeyboardEvents />

            <Form />
            <button
                onClick={() => setShowCounter1(!showCounter1)}
                style={{
                    color: "red",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    backgroundColor: "teal",
                    display: "block",
                    margin: "2rem auto",
                    padding: "1rem 2rem",
                }}
            >
                Show Counter 1 Toggle
            </button>
            {showCounter1 && <Counter name="Apples" />}

            <CounterFunctComp name="Oranges" />
        </div>
    );
}

export default App;
