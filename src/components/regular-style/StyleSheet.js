import "./styleSheet.css";

const StyleSheet = (props) => {
    const isClassName = props.primary ? "primary" : "secondary";
    return (
        <div className="title-div">
            <h1 className="title">Style Sheet</h1>
            <p className={isClassName}>Dynamic Changing Color</p>
        </div>
    );
};

export default StyleSheet;
