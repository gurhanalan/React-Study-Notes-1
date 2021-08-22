const KeyboardEvents = () => {
    const handleKeyDown = (e) => {
        console.log(`type:`, e.type);
    };
    const handleKeyUp = (e) => {
        console.log(`type Up:`, e.type);
        console.log("value: ", e.target.value);
        console.log("key code: ", e.keyCode);
    };

    // Cut

    const handleCut = (e) => console.log("type Cut", e.type);
    const handleCopy = (e) => console.log("type Copy", e.type);
    const handlePaste = (e) => console.log("type Paste", e.type);

    return (
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <h2>Keyboard Events</h2>
            <input
                type="text"
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
                onPaste={handlePaste}
            ></input>
            <p onCut={handleCut} onCopy={handleCopy}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore
            </p>
        </div>
    );
};

export default KeyboardEvents;
