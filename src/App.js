// import logo from "./logo.svg";
// import "./App.css";

import ClassComponent from "./components/ClassComponent";
import TitleFunctionalComp from "./components/FunctionalComponent";
import StyleInlineCss from "./components/InlineCSS/StyleInlineCss";
import StyleSheet from "./components/regular-style/StyleSheet";

function App() {
    return (
        <div className="App">
            {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

            <ClassComponent name="Jane Doe" />
            <TitleFunctionalComp name="John Doe" />

            <StyleInlineCss />
            <StyleSheet primary={false} />
        </div>
    );
}

export default App;
