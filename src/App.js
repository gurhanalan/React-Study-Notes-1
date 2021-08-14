import ClassComponent from "./components/ClassComponent";
import TitleFunctionalComp from "./components/FunctionalComponent";
import StyleInlineCss from "./components/InlineCSS/StyleInlineCss";
import StyleSheet from "./components/regular-style/StyleSheet";
import SassyStyle from "./components/Sassy/SassyStyle";

function App() {
    return (
        <div className="App">
            <ClassComponent name="Jane Doe" />
            <TitleFunctionalComp name="John Doe" />

            <StyleInlineCss />
            <StyleSheet primary={false} />
            <SassyStyle />
        </div>
    );
}

export default App;
