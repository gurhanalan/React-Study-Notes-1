import React from "react";
import styles from "./counter.module.scss";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        console.log("Constructor");
    }

    countUp = () => {
        this.setState({ counter: this.state.counter + 1 });
    };
    countDown = () => {
        this.setState({ counter: this.state.counter - 1 });
    };

    static getDerivedStateFromProps(props, state) {
        console.log("getDerievedStatesFromProps", props, state);
        return null;
    }

    shouldComponentUpdate = () => {
        console.log("Should component update");
        return true;
    };
    componentDidMount = () => {
        console.log("Component Mounted");
        console.log("--------------------");
    };

    getSnapshotBeforeUpdate = (prevprops, prevstate) => {
        console.log("snapshot", prevprops, prevstate);
        return null;
    };

    componentDidUpdate = () => {
        console.log("Component did update");
    };

    componentWillUnmount() {
        console.log("Component will unmount, bye bye");
    }
    render() {
        console.log("Render");
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
