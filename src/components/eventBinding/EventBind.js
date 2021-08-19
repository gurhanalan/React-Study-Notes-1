import React, { Component } from "react";

class EventBind extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello",
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ message: "Goodbye!" });
        console.log("this: ", this);
    }

    handleClick2 = () => {
        this.setState({ message: "Goodbye!" });
        console.log("this: ", this);
    };

    handleClick3(name) {
        this.setState({ message: `Goodbye! ${name}` });
        console.log("this: ", this);
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                {/* <button onClick={this.handleClick.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.handleClick()}>Click</button> */}
                {/* <button onClick={this.handleClick}>Click</button> */}
                {/* <button onClick={this.handleClick2}>Click</button> */}
                <button onClick={() => this.handleClick3("Joe")}>Click</button>
            </div>
        );
    }
}

export default EventBind;
