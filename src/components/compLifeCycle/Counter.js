import React from "react";
import styles from "./counter.module.scss";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    countUp = () => {
        this.setState({ counter: this.state.counter + 1 });
    };
    countDown = () => {
        this.setState({ counter: this.state.counter - 1 });
    };

    render() {
        return (
            <div className={styles.container}>
                <h1> Comp Life Cycle </h1>

                <p>Counter of {this.props.name}</p>
                <p>Counter : {this.state.counter}</p>
                <button onClick={this.countDown}>Count Down</button>
                <button onClick={this.countUp}>Count Up</button>
            </div>
        );
    }
}

export default Counter;
