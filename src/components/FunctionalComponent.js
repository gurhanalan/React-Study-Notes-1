import React from "react";

const TitleFunctionalComp = (props) => {
    return (
        <div className="title-2">
            <h2>Functional Component</h2>
            <p>{props.name}</p>
        </div>
    );
};

export default TitleFunctionalComp;
