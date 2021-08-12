import React from "react";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { age: "32" };
    }

    render() {
        return (
            <div className="wrapper">
                <h1 className="title"> Deneme </h1>
                <p>{this.props.name}</p>
                <p>{this.state.age}</p>
            </div>
        );
    }
}

export default ClassComponent;
