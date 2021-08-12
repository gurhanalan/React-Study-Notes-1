// import React from "react";
/* 
const inlineStyle = {
    div: {
        backgroundColor: "yellowgreen",
        padding: "2rem",
        textAlign: "center",
    },
    para: { color: "white", fontWeight: "bold" },
};
 */

import { inlineStyle } from "./styles";

const StyleInlineCss = () => {
    return (
        <div style={inlineStyle.div}>
            <h1
                style={{
                    color: "red",
                    fontSize: "1.6rem",
                    backgroundColor: "teal",
                    margin: "2rem auto",
                    padding: "1rem 0",
                }}
            >
                Inline CSS Component
            </h1>
            <p style={inlineStyle.para}>Inline Style Tryout</p>
        </div>
    );
};

export default StyleInlineCss;
