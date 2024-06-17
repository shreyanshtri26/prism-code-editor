import React, { useState, useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

const CodeEditor = ({ language = "jsx" }) => {
  const [code, setCode] = useState(`
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello world</h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
  `);
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div >
      <textarea
      id="editing"
        value={code}
        onChange={handleCodeChange}
        
        spellcheck="false"
       
        placeholder="Type your code here..."
      />
      <pre
      id="highlighting"
      aria-hidden="true"
      >
        <code  id="highlighting-content" ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeEditor;
