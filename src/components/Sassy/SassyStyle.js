const SassyStyle = () => {
    return (
        <div className="sassy-div">
            <h1>Sass Styling</h1>
            <p>Saas Styling paragraph</p>
            <div className="sassy-div__btns">
                <button className="sassy-div__btns__btn sassy-div__btns__btn--left">
                    Left
                </button>
                <button className="sassy-div__btns__btn sassy-div__btns__btn--right">
                    Right
                </button>
            </div>
        </div>
    );
};

export default SassyStyle;
