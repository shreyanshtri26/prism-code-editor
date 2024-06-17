import "./App.css";
import CodeEditor from "./components/CodeEditor";

function App() {

  return (
    <div className="App">
      <div className="title_container">
        <h1 className="title">react-simple-code-editor</h1>
        <p className="desc">A simple no-frills code editor with syntax highlighting.</p>
        <a 
          href="https://github.com/shreyanshtri26/prism-code-editor"
          target="_blank"
          rel="noopener noreferrer"
          className="github">
          GitHub
        </a>

      </div>
      <CodeEditor language="javascript" />
    </div>
  );
}

export default App;
